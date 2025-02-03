import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Blog(){
  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <img
            src="/images/Meubel House_Logos-05.png"
            alt="logo-img"
            width={50}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <h1 className="font-title text-lg font-bold">Furniro</h1>
        </div>

        <nav className="flex items-center justify-between w-full">
          <ul className="flex items-center space-x-6 mx-auto">
            <li><Link href="/" target="_blank">Home</Link></li>
            <li><Link href="/Shop" target="_blank">Shop</Link></li>
            <li><Link href="/Blog" target="_blank">Blog</Link></li>
            <li><Link href="/Contact" target="_blank">Contact</Link></li>
          </ul>

          <div className="flex items-center gap-[45px] ml-auto">
            <Link href="/profile">
              <Icon icon="mdi:account-outline" className="w-7 h-7 text-black" aria-label="Account" />
            </Link>
            <Link href="/search">
              <Icon icon="mdi:magnify" className="w-7 h-7 text-black" aria-label="Search" />
            </Link>
            <Link href="/wishlist">
              <Icon icon="mdi:heart-outline" className="w-7 h-7 text-black" aria-label="Wishlist" />
            </Link>
            <Link href="/cart">
              <Icon icon="mdi:cart-outline" className="w-7 h-7 text-black" aria-label="Cart" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/images/header.png"
          alt="header"
          width={1440}
          height={316}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          <h2 className="text-4xl font-bold">Blog</h2>
          <p className="mt-2 text-lg">
            <span className="text-black-300">Home</span> &gt; <span className="text-black">Blog</span>
          </p>
        </div>
      </div>

        
      <div>

 


     <div className="container md:px-[100px] lg:px-0 px-10 md:pt-[106px] mt-9 bg-[#FFF] w-full   ">
    </div> 


    <section className="">


        <div
            className="section-1 md:flex gap-[71px] flex-wrap lg:flex-nowrap md:justify-center md:px-[100px] lg:px-0 px-10 md:pt-[106px] pt-9   ">
            <div className="left-col max-w-[817px]">
                <figure>
                    <img src="/images/blog1.png" alt=""/>
                    <figcaption
                        className="flex md:gap-[35px] gap-5 items-center text-[#9F9F9F] font-poppins md:text-base text-[10px]   font-normal leading-normal mt-[17px]">

                        <div className="flex gap-[7px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z"
                                    fill="#9F9F9F" />
                            </svg> <span>Admin</span>
                        </div>
                        <div className="flex gap-[7px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M1.66699 15.8334C1.66699 17.25 2.75033 18.3334 4.16699 18.3334H15.8337C17.2503 18.3334 18.3337 17.25 18.3337 15.8334V9.16669H1.66699V15.8334ZM15.8337 3.33335H14.167V2.50002C14.167 2.00002 13.8337 1.66669 13.3337 1.66669C12.8337 1.66669 12.5003 2.00002 12.5003 2.50002V3.33335H7.50033V2.50002C7.50033 2.00002 7.16699 1.66669 6.66699 1.66669C6.16699 1.66669 5.83366 2.00002 5.83366 2.50002V3.33335H4.16699C2.75033 3.33335 1.66699 4.41669 1.66699 5.83335V7.50002H18.3337V5.83335C18.3337 4.41669 17.2503 3.33335 15.8337 3.33335Z"
                                    fill="#9F9F9F" />
                            </svg> <span>14 Oct 2022</span>
                        </div>
                        <div className="flex gap-[7px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12.8966 21.968C12.3666 21.97 11.8566 21.758 11.4826 21.382L3.64564 13.547C3.44131 13.3434 3.28363 13.0978 3.18349 12.8272C3.08335 12.5567 3.04314 12.2676 3.06564 11.98L3.56564 5.41401C3.60018 4.93599 3.80617 4.48652 4.1457 4.14827C4.48524 3.81002 4.93549 3.60574 5.41364 3.57301L11.9796 3.07301C12.0316 3.06201 12.0826 3.06201 12.1346 3.06201C12.6646 3.06201 13.1716 3.27201 13.5446 3.64801L21.3826 11.482C21.5684 11.6677 21.7158 11.8883 21.8164 12.131C21.917 12.3737 21.9687 12.6338 21.9687 12.8965C21.9687 13.1592 21.917 13.4194 21.8164 13.6621C21.7158 13.9048 21.5684 14.1253 21.3826 14.311L14.3106 21.382C14.1254 21.5683 13.905 21.716 13.6623 21.8166C13.4196 21.9172 13.1594 21.9687 12.8966 21.968ZM8.65364 6.65401C8.32475 6.65411 8.00096 6.73531 7.71094 6.89042C7.42093 7.04554 7.17364 7.26978 6.99099 7.54329C6.80834 7.8168 6.69596 8.13113 6.6638 8.45845C6.63164 8.78576 6.68069 9.11595 6.80662 9.41978C6.93255 9.72361 7.13146 9.99169 7.38574 10.2003C7.64002 10.4089 7.94181 10.5516 8.26439 10.6157C8.58698 10.6798 8.92039 10.6633 9.2351 10.5678C9.54982 10.4723 9.83611 10.3006 10.0686 10.068L10.0756 10.062L10.0826 10.055L10.0746 10.062C10.3526 9.78158 10.5414 9.42513 10.6171 9.03759C10.6928 8.65006 10.6522 8.24877 10.5002 7.88432C10.3482 7.51986 10.0918 7.20855 9.76318 6.98961C9.43457 6.77066 9.04851 6.65389 8.65364 6.65401Z"
                                    fill="#9F9F9F" />
                            </svg> <span>Wood</span>
                        </div>

                    </figcaption>
                   
                
                </figure>
            </div>
      </div>

      </section>

      <div className="right-col mt-5 md:pt-0 ">
                <div className="searchBox border border-[#9F9F9F] flex py-2 md:px-2 rounded-[10px] mb-5 md:mb-0 ">
                    <input type="text" className="outline-none border-none w-full"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                </div>

      <div className="md:px-6"> 
        <h3 className="pt-[43px] text-black text-2xl font-medium leading-normal"> Catogories </h3>
        <div className="text-[#9F9F9F] font-poppins text-base font-normal leading-normal">
                        <div className="flex justify-between items-center mb-[41px] pt-[33px]">
                            <span>Crafts</span>
                            <span>2</span>
                        </div>
                        <div className="flex justify-between items-center mb-[41px]">
                            <span>Design</span>
                            <span>8</span>
                        </div>
                        <div className="flex justify-between items-center mb-[41px]">
                            <span>Handmade</span>
                            <span>7</span>
                        </div>
                        <div className="flex justify-between items-center mb-[41px]">
                            <span>Interior</span>
                            <span>1</span>
                        </div>
                        <div className="flex justify-between items-center mb-[41p]">
                            <span>Wood</span>
                            <span>6</span>
                        </div>
                    </div>
                </div>




      </div>
   

      </div>
      )};
      
