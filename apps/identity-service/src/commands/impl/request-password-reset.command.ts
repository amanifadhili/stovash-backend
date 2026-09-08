import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RequestPasswordResetPayload {
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}

export class RequestPasswordResetCommand extends BaseCommand<RequestPasswordResetPayload> {
  constructor(payload: RequestPasswordResetPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
