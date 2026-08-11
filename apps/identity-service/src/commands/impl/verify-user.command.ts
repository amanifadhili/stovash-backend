import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class VerifyUserPayload {
  token!: string;
}

export class VerifyUserCommand extends BaseCommand<VerifyUserPayload> {
  constructor(payload: VerifyUserPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
