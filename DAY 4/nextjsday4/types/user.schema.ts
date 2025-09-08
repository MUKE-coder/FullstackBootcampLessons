import z from "zod";
export const UserBaseSchema = z.object({
  id: z.string(),
  NAME: z.string(),
  EMAIL: z.string(),
  IMAGE: z.string(),
  PHONE: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type User = z.infer<typeof UserBaseSchema>;
