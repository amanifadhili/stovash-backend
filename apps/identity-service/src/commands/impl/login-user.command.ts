import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserPayload {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}

export class LoginUserCommand extends BaseCommand<LoginUserPayload> {
  constructor(payload: LoginUserPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
