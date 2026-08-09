import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const firebaseConfig = require('../../../../../firebase-applet-config.json');

if (!getApps().length) {
  initializeApp({
    projectId: firebaseConfig.projectId,
  });
}

export const adminAuth = getAuth();

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return true; // We don't block unauthenticated for now, just attach user if exists, or you could throw UnauthorizedException.
      // throw new UnauthorizedException('Missing token');
    }

    const token = authHeader.split('Bearer ')[1];
    
    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      request.user = decodedToken;
      
      // Merge firebase UID into command context
      if (request.context) {
        request.context.userId = decodedToken.uid;
      }
      
      return true;
    } catch (error) {
      console.error('Error verifying Firebase ID token:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
