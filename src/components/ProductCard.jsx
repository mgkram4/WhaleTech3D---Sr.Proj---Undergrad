import { Product } from "./Product";
import React, { useContext } from "react";

import { ShopContext, ShopContextProvider } from "./shop-context";

function ProductCard(props) {
  const { id, productName, price, stock, descipt, img } = props;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    // GEN CONTAINER
    <div className=" z-0 flex flex-col justify-between w-80 h-160 bg-slate-50 shadow-xl rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all">
      <div className="flex flex-col justify-center p-4 border-black">
        {/* TITLE AND DESCRIPTION  */}
        <div className="font-bold text-2xl text-center"> {productName}</div>
        <div className="text-sm text-center my-2">{descipt}</div>
      </div>

      {/* PRODCUT IMG  */}
      <div className="flex flex-auto p-4 h-80 border-black">
        <img src={img} alt={productName} />
      </div>

      <div className="flex flex-col justify-center p-4 border-black">
        <div class="group">
          {/* PRICE */}
          <div className="text-center mb-2">$ {price}</div>
          <div class="flex items-center justify-center space-x-3 group">
            <div class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>

            {/* STOCK  */}
            <div class="text-sm">{stock} pcs. in stock</div>
          </div>

          {/* ADD TO CART  */}
          <div class="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-4 space-x-1 text-sm md:flex-row mt-4">
            <button
              onClick={() => addToCart(id)}
              className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.29 7.12A1 1 0 0 0 19.57 7H7.78L6.89 4.38A1 1 0 0 0 6 4H2a1 1 0 0 0 0 2h3.11l2.78 10.05a2 2 0 0 0 1.94 1.5h7a2 2 0 0 0 1.94-1.5L21 9.41a1 1 0 0 0-.71-1.29zM7.78 20a4 4 0 0 1-3.84-3h12.12a4 4 0 0 1-3.84 3H7.78z" />
              </svg>

              <span>
                Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
