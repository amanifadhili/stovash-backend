import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';

@Controller()
export class AppController {
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
    
    // Dispatch to internal services...
    return { 
      status: 'success', 
      message: `Command ${cmd} received and dispatched.`,
      traceId: req.context?.traceId || 'generated-trace-id',
      context: req.context,
      payload
    };
  }
}
