import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import { CartItem } from "./cart-item";
import { Product } from "./Product";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-banner-bg-hero bg-no-repeat bg-center bg-cover">
      <div className="">
        <h1 className="text-5xl flex justify-center text-[rgba(51,158,173,255)] ">
          Your Cart Items
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8 ">
        {Product.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                stock={product.stock}
                img={product.img}
                descipt={product.descipt}
              />
            );
          }
        })}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-white ">
        <p>Subtotal: ${totalAmount}</p>
        <Link to="/Products">
          <button
            onClick={handleScrollToTop}
            className=" p-1 shadow-sm rounded-2xl hover:bg-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-white hover:text-[rgba(5,33,40,255)] w-full"
          >
            Continue Shopping
          </button>{" "}
        </Link>
        <button>Checkout</button>
      </div>
    </div>
  );
};
