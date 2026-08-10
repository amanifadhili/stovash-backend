import { Controller, Get, Post, Req, Inject, Body, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { FirebaseAuthGuard } from './common/auth/firebase-auth.guard.js';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy,
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy
  ) {}

  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Post('api')
  // @UseGuards(FirebaseAuthGuard)
  async handleCommand(@Req() req: any, @Body() body: any): Promise<any> {
    const { command, payload } = body || {};
    const cmd = command || req.headers['x-command'];

    if (!cmd) {
      return { status: 'error', message: 'Missing command identifier in body' };
    }

    const context = req.context;

    try {
      if (['CreateTenant', 'CreateUser', 'LoginUser'].includes(cmd)) {
        return await firstValueFrom(this.identityClient.send({ cmd }, { payload, context }));
      }
      
      if (['PostJournalEntry', 'CreateLedgerAccount', 'OpenWorkPeriod', 'CloseWorkPeriod', 'GetActiveWorkPeriod'].includes(cmd)) {
        return await firstValueFrom(this.accountingClient.send({ cmd }, { payload, context }));
      }

      if (['AddProduct', 'AddInventoryItem', 'ProcessPosSale', 'ReceiveGoods', 'ProcessSalesReturn', 'CreateWarrantyClaim'].includes(cmd)) {
        return await firstValueFrom(this.inventoryClient.send({ cmd }, { payload, context }));
      }

      return { 
        status: 'error', 
        message: `Command ${cmd} is not routed properly.`,
        traceId: context?.traceId
      };
    } catch (error: any) {
      throw new HttpException(
        {
          status: 'error',
          message: error.message || 'Service communication error',
          errorCode: error.code || 'INTERNAL_ERROR',
          details: error.details
        },
        error.httpStatus || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
