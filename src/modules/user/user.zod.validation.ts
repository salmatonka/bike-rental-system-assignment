import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string(),
  address: z.string(),
  role: z.enum(['admin', 'user']),
});









