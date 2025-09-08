// Step 1 : Create a base schema
// BASE SCHEMA
// The baseschema contains all the properties of
// aparticular resource eg product

import z from "zod";

export const ProductBaseSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "TItle is required"),
  slug: z.string(),
  image: z.string(),
  price: z.number(),
  stock: z.number(),
  productImages: z.array(z.string()),
});

//
export const ProductCardSchema = ProductBaseSchema.omit({
  productImages: true,
  id: true,
});

export type ProductCardProps = z.infer<typeof ProductCardSchema>;

// //
// export const ArchievedProductSchema = ProductBaseSchema.extend({
//   userId: z.string(),
// });
