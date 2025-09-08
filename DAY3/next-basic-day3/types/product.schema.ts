import z from "zod";

export const ProductBaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  productCode: z.string(),
  stockQty: z.number(),
  productCost: z.number(),
  productPrice: z.number(),
  supplierPrice: z.number(),
  alertQty: z.number(),
  productTax: z.number(),
  taxMethod: z.string(),
  productImages: z.array(z.number()),
  status: z.boolean(),
  productThumbnail: z.string(),
  productDetails: z.string(),
});

export const ProductCardSchema = ProductBaseSchema.omit({
  id: true,
  productCode: true,
  productCost: true,
  supplierPrice: true,
  alertQty: true,
  productTax: true,
  taxMethod: true,
  productImages: true,
  status: true,
  productDetails: true,
});

export type ProductCardProps = z.infer<typeof ProductCardSchema>;
