import { Controller, Get, Query, Req, Res, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleAuthService } from './google-auth.service.js';
import jwt from 'jsonwebtoken';

@Controller('auth')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get('google')
  async google(@Req() req: Request, @Res() res: Response) {
    const state = crypto.randomUUID();
    
    // Set OAuth state cookie
    res.cookie('oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 10 * 60 * 1000, // 10 minutes
    });

    const url = this.googleAuthService.getGoogleAuthorizationUrl(state);
    return res.redirect(url);
  }

  @Get('google/callback')
  async googleCallback(
    @Req() req: Request,
    @Res() res: Response,
    @Query('code') code?: string,
    @Query('state') state?: string,
    @Query('error') error?: string,
  ) {
    if (error) {
      return res.redirect(
        `${process.env.FRONTEND_URL}/auth/login?error=google_denied`,
      );
    }

    if (!code || !state) {
      throw new UnauthorizedException('Missing OAuth parameters');
    }

    const stateCookie = req.cookies.oauth_state;
    if (!stateCookie || stateCookie !== state) {
      throw new UnauthorizedException('Invalid OAuth state');
    }

    try {
      const user = await this.googleAuthService.authenticateGoogle(code);
      const session = await this.googleAuthService.createSession(user.id);

      const isProduction = process.env.NODE_ENV === 'production';

      // Set all cookies before sending any response
      res.clearCookie('oauth_state', { path: '/' });
      res.cookie('session', session.rawToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax',
        path: '/',
        expires: session.expiresAt,
      });

      return res.redirect(`${process.env.FRONTEND_URL}/auth/success`);
    } catch (error) {
      console.error('Google authentication error:', error);
      res.clearCookie('oauth_state', { path: '/' });
      return res.redirect(
        `${process.env.FRONTEND_URL}/auth/login?error=authentication_failed`,
      );
    }
  }

  @Get('me')
  async me(@Req() req: Request) {
    const token = req.cookies.session;
    if (!token) {
      throw new UnauthorizedException();
    }

    const user = await this.googleAuthService.getUserFromSession(token);
    if (!user) {
      throw new UnauthorizedException();
    }

    const accessToken = jwt.sign(
      { sub: user.id, email: user.email, role: user.role, tenantId: user.tenantId },
      process.env.JWT_SECRET || 'dev-secret-key',
      { expiresIn: '1d' },
    );

    return { user, accessToken };
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    const token = req.cookies.session;
    if (token) {
      await this.googleAuthService.deleteSession(token);
    }

    res.clearCookie('session', { path: '/' });
    return res.send({ success: true });
  }
}