import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { createHash, randomBytes } from 'crypto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GoogleAuthService {
  private readonly googleClient: OAuth2Client;

  constructor(
    private readonly config: ConfigService,
    @Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy,
  ) {
    this.googleClient = new OAuth2Client(
      this.config.getOrThrow<string>('GOOGLE_CLIENT_ID'),
      this.config.getOrThrow<string>('GOOGLE_CLIENT_SECRET'),
      this.config.getOrThrow<string>('GOOGLE_CALLBACK_URL'),
    );
  }

  getGoogleAuthorizationUrl(state: string) {
    return this.googleClient.generateAuthUrl({
      access_type: 'online',
      scope: ['openid', 'email', 'profile'],
      state,
      prompt: 'select_account',
    });
  }

  async authenticateGoogle(code: string) {
    const { tokens } = await this.googleClient.getToken(code);

    if (!tokens.id_token) {
      throw new UnauthorizedException('Google did not return an identity token');
    }

    const ticket = await this.googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: this.config.getOrThrow<string>('GOOGLE_CLIENT_ID'),
    });

    const payload = ticket.getPayload();

    if (!payload) {
      throw new UnauthorizedException('Invalid Google identity');
    }

    if (!payload.sub) {
      throw new UnauthorizedException('Google account ID is missing');
    }

    if (!payload.email) {
      throw new UnauthorizedException('Google account email is missing');
    }

    // Call identity service to handle user account creation/linking
    try {
      const user = await firstValueFrom(
        this.identityClient.send(
          { cmd: 'handle_google_user' },
          {
            googleSub: payload.sub,
            email: payload.email.toLowerCase(),
            name: payload.name || null,
            firstName: payload.given_name || null,
            lastName: payload.family_name || null,
            avatarUrl: payload.picture || null,
            emailVerified: payload.email_verified === true,
          },
        ),
      );
      return user;
    } catch (error) {
      console.error('Error handling Google user:', error);
      throw new UnauthorizedException('Failed to process Google user');
    }
  }

  async createSession(userId: string) {
    const rawToken = randomBytes(48).toString('base64url');
    const tokenHash = this.hashToken(rawToken);

    const days = Number(this.config.get<string>('SESSION_TTL_DAYS', '30'));
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    // Call identity service to create session
    try {
      await firstValueFrom(
        this.identityClient.send(
          { cmd: 'create_session' },
          {
            tokenHash,
            userId,
            expiresAt: expiresAt.toISOString(),
          },
        ),
      );
    } catch (error) {
      console.error('Error creating session:', error);
      throw new UnauthorizedException('Failed to create session');
    }

    return {
      rawToken,
      expiresAt,
    };
  }

  async getUserFromSession(rawToken: string) {
    const tokenHash = this.hashToken(rawToken);

    try {
      const session = await firstValueFrom(
        this.identityClient.send(
          { cmd: 'get_user_from_session' },
          { tokenHash },
        ),
      );

      if (!session) {
        return null;
      }

      // Check if session is expired
      if (new Date(session.expiresAt) <= new Date()) {
        await this.deleteSession(rawToken);
        return null;
      }

      return session.user;
    } catch (error) {
      console.error('Error getting user from session:', error);
      return null;
    }
  }

  async deleteSession(rawToken: string) {
    const tokenHash = this.hashToken(rawToken);

    try {
      await firstValueFrom(
        this.identityClient.send(
          { cmd: 'delete_session' },
          { tokenHash },
        ),
      );
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  }

  private hashToken(token: string) {
    return createHash('sha256').update(token).digest('hex');
  }
}