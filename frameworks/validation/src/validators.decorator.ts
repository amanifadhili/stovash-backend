import { ZodSchema } from 'zod';

/**
 * Validate data against a Zod schema and throw if invalid
 */
export function validateData<T>(schema: ZodSchema<T>, data: unknown): T {
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
export async function validateDataAsync<T>(schema: ZodSchema<T>, data: unknown): Promise<T> {
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
