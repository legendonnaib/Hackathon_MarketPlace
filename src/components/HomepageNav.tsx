"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../app/product/context/CartContext";
import { useState } from "react";
import CartModal from "../components/CartModal";
 

export default function HomepageNav() {

    const { cart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const handleCartClick = () => {
      setIsCartOpen(!isCartOpen);
    };
  
  return (
    <div className="w-full py-[30px] pl-[54px] pr-[100px] bg-white">
    
      <header className="flex justify-between mx-auto h-fit">
        <div className="flex items-center">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="logo"
            className="w-[50px] h-[32px]"
            width={50}
            height={32}
          />
          <h1 className="font-title text-lg font-bold">Furniro</h1>
        </div>
        <nav className="flex items-center justify-between w-full">
          <ul className="flex items-center space-x-6 mx-auto">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Shop" target="_blank">Shop</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/Contact" target="_blank">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[45px]">
          <Link href="/profile">
            <Icon
              icon="mdi:account-outline"
              className="w-7 h-7 text-black"
              aria-label="Account"
            />
          </Link>
          <Link href="/search">
            <Icon
              icon="mdi:magnify"
              className="w-7 h-7 text-black"
              aria-label="Search"
            />
          </Link>
          <Link href="/wishlist">
            <Icon
              icon="mdi:heart-outline"
              className="w-7 h-7 text-black"
              aria-label="Wishlist"
            />
          </Link>
            
            <div className="relative cursor-pointer hover:text-indigo-200" onClick={handleCartClick}>
            <Icon
              icon="mdi:cart-outline"
              className="w-7 h-7 text-black"
              aria-label="Cart"
            />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1"
            >
              {cart.length}
            </div>
          </div>
           
        </div>
      </header>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}


