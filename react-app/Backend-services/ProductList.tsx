import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching products", category);
    setProducts(["as", "as"]);
  }, [category]);
  return <div>{category}</div>;
};

export default ProductList;
