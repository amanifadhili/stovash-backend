import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateTenantPayload {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  adminEmail!: string;

  @IsNotEmpty()
  @MinLength(8)
  adminPassword!: string;

  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;
}

export class CreateTenantCommand extends BaseCommand<CreateTenantPayload> {
  constructor(payload: CreateTenantPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
