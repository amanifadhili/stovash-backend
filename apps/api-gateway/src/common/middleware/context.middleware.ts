import { Injectable, NestMiddleware } from '@nestjs/common';
import { ICommandContext } from '@electronic-shop/types';
import { v4 as uuidv4 } from 'uuid';

export interface RequestWithContext extends Request {
  context: ICommandContext;
}

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const traceId = req.headers['x-trace-id'] || uuidv4();
    
    // Set response header
    res.setHeader('x-trace-id', traceId);
    
    // Parse context from headers (simulating API Gateway validation)
    req.context = {
      tenantId: req.headers['x-tenant-id'] || 'default-tenant',
      shopId: req.headers['x-shop-id'] || 'default-shop',
      userId: req.headers['x-user-id'] || 'system',
      workPeriodId: req.headers['x-work-period-id'] || null,
      traceId: traceId,
    };
    
    next();
  }
}
