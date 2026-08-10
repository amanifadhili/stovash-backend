import { IRequestContext } from '@electronic-shop/types';

export abstract class BaseCommand<TPayload = any> {
  constructor(
    public readonly payload: TPayload,
    public readonly context?: IRequestContext
  ) {}
}

export abstract class BaseCommandHandler<TCommand extends BaseCommand = any, TResult = any> {
  abstract execute(command: TCommand): Promise<TResult>;
}
