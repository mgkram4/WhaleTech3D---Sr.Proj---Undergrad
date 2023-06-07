import { Product } from "./Product";
import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem = (props) => {
  const { id, productName, price, stock, descipt, img } = props;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className=" z-0 flex flex-col justify-between w-80 h-120 bg-slate-50 shadow-xl rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all ">
      <div className="flex flex-col justify-center p-4 border-black">
        {/* TITLE AND DESCRIPTION  */}
        <div className="font-bold text-lg text-center"> {productName}</div>
        <div className="text-sm text-center my-2">{descipt}</div>
      </div>
      {/* PRODCUT IMG  */}
      <div className="flex flex-auto p-4 border-blac h-80">
        <img src={img} alt={productName} />
      </div>
      <div className="flex flex-col justify-center p-4 border-black">
        <div class="group">
          {/* PRICE */}
          <div className="text-center mb-2">$ {price}</div>
          <div class="flex items-center justify-center space-x-3 group">
            {/* STOCK  */}

            <div className="flex-col">
              <div className=" flex space-x-2">
                <button
                  className="flex-grow flex items-center justify-center py-3 px-5 space-x-3 border-2 rounded-lg shadow-sm  hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-red-500 w-full"
                  onClick={() => removeFromCart(id)}
                >
                  {" "}
                  -{" "}
                </button>

                <input
                  className="flex border-2 text-center w-12"
                  value={cartItems[id]}
                />
                <button
                  className="flex-grow flex items-center justify-center py-3 px-5 space-x-3 border-2 rounded-lg shadow-sm  hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-green-500 w-full"
                  onClick={() => addToCart(id)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
