import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts.jsx/RelatedProducts";
import { ShopContext } from "../Context/ShopContext";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Convert productId to the appropriate type (e.g., integer) if needed
  const parsedProductId = parseInt(productId, 10);
  console.log("parsedProductId:", parsedProductId);

  // Find the product based on the converted productId
  const product = all_product.find((e) => e.id === parsedProductId);
  console.log("product:", product);

  return (
    <div>
      <Breadcrum product={product} />
      {/* Render other product details */}
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
