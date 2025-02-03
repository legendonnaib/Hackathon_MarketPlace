"use client";

import React from "react";
import { useCart } from "../app/product/context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 mr-4 text-black text-2xl font-semibold"
        >
          &times;
        </button>

        <h2 className="text-2xl text-black font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-black">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((product) => (
                <li key={product.id} className="flex justify-between border-2 border-gray-100 rounded-lg items-center mb-4">
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage).width(300).height(300).url() ?? ""}
                      alt={product.title ?? ""}
                      width={50}
                      height={50}
                      className="w-16 h-16 object-cover rounded-lg "
                    />
                  )}
                  <div className="flex-1 ml-4">
                    <p className="font-semibold text-indigo-800 mb-[2px]">{product.title}</p>
                    <p className="text-sm text-green-600">${product.price.toFixed(2)}</p>

                    
                    <div className="flex items-center ">
                      <p className="text-sm text-green-600 ">
                        x: {product.quantity}
                      </p>
                      <button
                        onClick={() => decreaseQuantity(product._id)}
                        className=" text-black p-2 rounded-full"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(product._id)}
                        className=" text-black p-2 rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Display Total Price */}
            <div className="mt-4 flex justify-between items-center">
              <p className="font-semibold">Total:</p>
              <p className="text-lg text-indigo-800">${getTotalPrice().toFixed(2)}</p>
            </div>

            {/* Clear Cart Button */}
            <div className="mt-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white p-2 rounded w-full mb-4"
              >
                Clear Cart
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-black p-2 rounded w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
