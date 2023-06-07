import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Product } from "./Product";

function Products() {
  return (
    <div className="bg-banner-bg-hero bg-center bg-cover min-h-screen">
      <h1 className="text-5xl flex justify-center text-[rgba(51,158,173,255)] py-4">
        Products
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-8  gap-6">
        {Product.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.productName}
            price={product.price}
            stock={product.stock}
            img={product.img}
            descipt={product.descipt}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
