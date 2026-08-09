import { Controller, Get, Post, Req, Inject, Body, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from './common/auth/firebase-auth.guard.js';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy) {}

  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
  
  @Get('docs')
  getDocs(): { message: string } {
    return { message: 'API Documentation will be available here.' };
  }

  // Unified Command Endpoint
  @Post('api')
  @UseGuards(FirebaseAuthGuard)
  async handleCommand(@Req() req: any, @Body() body: any): Promise<any> {
    const { command, payload } = body || {};
    
    // Support legacy header command temporarily
    const cmd = command || req.headers['x-command'];
    
    if (!cmd) {
      return { status: 'error', message: 'Missing command identifier in body or headers' };
    }

    if (cmd === 'ThrowError') {
      throw new Error('This is a test error from command execution');
    }
    
    const context = req.context;
    
    // Command Router
    try {
      if (['CreateTenant', 'CreateUser', 'LoginUser'].includes(cmd)) {
        const result = await firstValueFrom(
          this.identityClient.send({ cmd }, { payload, context })
        );
        return { 
          status: 'success', 
          message: `Command ${cmd} processed successfully.`,
          traceId: context?.traceId,
          data: result
        };
      }
      
      return { 
        status: 'success', 
        message: `Command ${cmd} received but no handler found.`,
        traceId: context?.traceId,
        context,
        payload
      };
    } catch (error: any) {
      throw new InternalServerErrorException(error.message || 'Service communication error');
    }
  }
}
