"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "../../sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function Header() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        setLoading(false); 
        console.log(fetchedProducts);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <span className="text-xl font-semibold text-gray-500">Loading products...</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

            {product.productImage && (
              <div className="flex justify-center mb-4 relative w-48 h-48">
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.title || "Product image"}
                  
                  width={200}
                  height={200}
                  objectFit="cover"
                  priority
                />
              </div>
            )}

            <Link href={`/product/${product.slug?.current || ""}`} passHref>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </Link>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No products available at the moment.
        </div>
      )}
    </div>
  );
}
