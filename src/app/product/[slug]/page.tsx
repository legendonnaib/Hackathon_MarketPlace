'use client'
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import Image from "next/image";
import { getProductBySlug } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";


interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(getProductBySlug, { slug });
  console.log(product);
  return product || null;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [inventory, setInventory] = useState<number>(0);
  const { addToCart } = useCart();
  const { slug } = params;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(slug);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setInventory(fetchedProduct.inventory);  // Assuming product has an 'inventory' field
      }
    };
    
    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product && inventory > 0) {
      addToCart(product);
      setInventory(inventory - 1);  // Decrease inventory by 1 when added to cart
      toast.success("Product added to cart successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Sorry, this product is out of stock.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full aspect-square md:aspect-auto flex justify-center">
          {product.productImage ? (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title || "Product image"}
              width={400}
              height={400}
              className="object-contain max-w-full max-h-full"
              priority
            />
          ) : (
            <p>Image not found</p>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {product.title || "Title not available"}
          </h1>
          <p className="text-xl font-semibold text-indigo-600">
            {product.price || "Price not available"}
          </p>
          <p className="text-base text-gray-700">{product.description || "Description not available"}</p>

          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Tags:</h3>
              <ul className="list-disc pl-5">
                {product.tags.map((tag, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.discountPercentage && (
            <p className="text-sm text-red-500 font-semibold">Discount: {product.discountPercentage}%</p>
          )}
          {product.isNew && <p className="text-green-500 font-semibold">New!</p>}

          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white mx-2 px-6 py-3 rounded-lg font-bold shadow-md transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={inventory === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
