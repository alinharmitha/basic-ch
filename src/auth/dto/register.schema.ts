import { z } from 'zod';

export const registerSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),

  details: z
    .object({
      mobile: z.string().optional(),
      age: z.number().optional(),
      salary: z.number().optional(),
    })
    .optional(),
});

export type RegisterDto = z.infer<typeof registerSchema>;