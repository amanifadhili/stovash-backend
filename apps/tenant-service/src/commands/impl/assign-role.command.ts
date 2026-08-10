import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class AssignRolePayload {
  staffId!: string;
  roleId!: string;
}

export class AssignRoleCommand extends BaseCommand<AssignRolePayload> {
  constructor(payload: AssignRolePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
