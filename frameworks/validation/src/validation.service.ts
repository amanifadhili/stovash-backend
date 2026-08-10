import { ZodSchema, z } from 'zod';

export class ValidationService {
  /**
   * Validate data against a Zod schema
   */
  static validate<T>(schema: ZodSchema<T>, data: unknown): T {
    const result = schema.safeParse(data);
    
    if (!result.success) {
      const errors = result.error.errors.map((err: any) => ({
        field: err.path.join('.'),
        message: err.message,
        code: err.code
      }));
      
      throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
    
    return result.data;
  }

  /**
   * Validate data asynchronously against a Zod schema
   */
  static async validateAsync<T>(schema: ZodSchema<T>, data: unknown): Promise<T> {
    const result = await schema.safeParseAsync(data);
    
    if (!result.success) {
      const errors = result.error.errors.map((err: any) => ({
        field: err.path.join('.'),
        message: err.message,
        code: err.code
      }));
      
      throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
    
    return result.data;
  }

  /**
   * Common validation schemas
   */
  static schemas = {
    // UUID validation
    uuid: z.string().uuid(),
    
    // Email validation
    email: z.string().email('Invalid email format'),
    
    // URL validation
    url: z.string().url('Invalid URL format'),
    
    // Date validation
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
    
    // DateTime validation
    dateTime: z.string().datetime('Invalid datetime format'),
    
    // Phone number validation (basic)
    phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format'),
    
    // Positive number
    positiveNumber: z.number().positive('Must be a positive number'),
    
    // Non-negative number
    nonNegativeNumber: z.number().nonnegative('Must be a non-negative number'),
    
    // Pagination
    pagination: z.object({
      page: z.number().int().positive().default(1),
      limit: z.number().int().positive().max(100).default(20),
    }),
    
    // Sort
    sort: z.object({
      field: z.string(),
      direction: z.enum(['asc', 'desc']).default('asc'),
    }),
    
    // Tenant context
    tenantContext: z.object({
      tenantId: z.string().uuid(),
      shopId: z.string().uuid(),
    }),
    
    // User context
    userContext: z.object({
      userId: z.string().uuid(),
      tenantId: z.string().uuid(),
      role: z.string(),
    }),
    
    // Work period context
    workPeriodContext: z.object({
      workPeriodId: z.string().uuid(),
      shopId: z.string().uuid(),
    }),
  };

  /**
   * Create a paginated response schema
   */
  static createPaginatedSchema<T>(itemSchema: ZodSchema<T>) {
    return z.object({
      data: z.array(itemSchema),
      pagination: z.object({
        page: z.number().int(),
        limit: z.number().int(),
        total: z.number().int(),
        totalPages: z.number().int(),
      }),
    });
  }

  /**
   * Create a standard response schema
   */
  static createResponseSchema<T>(dataSchema?: ZodSchema<T>) {
    return z.object({
      status: z.enum(['success', 'error']),
      message: z.string().optional(),
      data: dataSchema || z.any().optional(),
      traceId: z.string().uuid().optional(),
      errorCode: z.string().optional(),
    });
  }

  /**
   * Create an error response schema
   */
  static createErrorSchema() {
    return z.object({
      status: z.literal('error'),
      message: z.string(),
      errors: z.array(z.object({
        field: z.string(),
        message: z.string(),
        code: z.string(),
      })).optional(),
      traceId: z.string().uuid().optional(),
      errorCode: z.string().optional(),
    });
  }
}
