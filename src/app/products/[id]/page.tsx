import { Typography } from "@mui/material";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`products-${params.id}`), 100);
  });

  return {
    title: `${title}`,
  };
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  if (parseInt(params.id) === 100) {
    throw new Error(`product-${params.id} Not Found `);
  } else if (parseInt(params.id) > 2) {
    return notFound();
  }

  return (
    <div>
      <Typography component={"header"} variant="h3">
        Details About Product {params.id}
      </Typography>
    </div>
  );
};

export default ProductDetail;
