import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordPayload {
  @IsNotEmpty()
  token!: string;

  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}

export class ResetPasswordCommand extends BaseCommand<ResetPasswordPayload> {
  constructor(payload: ResetPasswordPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
