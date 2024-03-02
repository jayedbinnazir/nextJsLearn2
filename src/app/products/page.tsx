import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const generateMetadata = () => {
  return {
    title: "products",
  };
};

const ProductPage = () => {
  return (
    <div>
      <Typography variant="h5">Products List</Typography>
      <Link href={"/products/1"}>Product-1</Link>
      <br></br>
      <Link href={"/products/2"}>Product-2</Link>
      <br></br>
      <Link href={"/products/3"}>Product-3</Link>
      <br></br>
      <Link href={"/products/100"}>Product-100</Link>
    </div>
  );
};

export default ProductPage;
