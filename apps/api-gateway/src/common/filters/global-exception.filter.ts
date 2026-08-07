import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { IApiResponse } from '@electronic-shop/types';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errorCode = 'INTERNAL_ERROR';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse() as any;
      message = typeof res === 'string' ? res : (res.message || message);
      errorCode = res.errorCode || 'HTTP_ERROR';
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    // In a real app, we would extract traceId from Request Context
    const req = ctx.getRequest();
    const traceId = req.context?.traceId || req.headers['x-trace-id'] || 'generated-trace-id';

    const errorResponse: IApiResponse = {
      status: 'error',
      message,
      errorCode,
      traceId
    };

    response.status(status).json(errorResponse);
  }
}
