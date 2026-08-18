import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { TreasuryBooksClient } from './types.js';

@Injectable()
export class AccountingBooksBridge implements TreasuryBooksClient {
  constructor(@Inject('ACCOUNTING_SERVICE') private readonly accounting: ClientProxy) {}

  async postBooks(payload: any, context: any) {
    const result = await firstValueFrom(
      this.accounting.send({ cmd: 'PostTreasuryBooks' }, { payload, context }).pipe(timeout(8000)),
    );
    if (result?.status !== 'success' || !result.data?.financialTransaction?.id) {
      throw Object.assign(new Error(result?.message || 'Accounting post failed'), { response: result });
    }
    return result.data;
  }

  async getAllocation(context: any) {
    const result = await firstValueFrom(
      this.accounting.send({ cmd: 'GetProfitAllocation' }, { payload: {}, context }).pipe(timeout(8000)),
    );
    if (result?.status !== 'success') {
      throw Object.assign(new Error(result?.message || 'Could not load profit allocation'), { response: result });
    }
    return result.data;
  }

  async getEngineReport(context: any) {
    const result = await firstValueFrom(
      this.accounting.send({ cmd: 'GetEngineReport' }, { payload: {}, context }).pipe(timeout(8000)),
    );
    if (result?.status !== 'success') {
      throw Object.assign(new Error(result?.message || 'Could not load engine report'), { response: result });
    }
    return result.data;
  }
}
