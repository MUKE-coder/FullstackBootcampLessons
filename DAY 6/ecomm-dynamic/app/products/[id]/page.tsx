import ProductDetail from "@/components/ProductDetail";
import React from "react";

export default async function DetailPage({
  params,
}: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = await params;
  if (!id) {
    return <p>Not Found Page</p>;
  }
  return (
    <div>
      <ProductDetail id={id} />
    </div>
  );
}
