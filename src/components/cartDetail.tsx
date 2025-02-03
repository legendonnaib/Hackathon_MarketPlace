// components/CartDetails.tsx

import React from 'react';
import { useCart } from '../app/product/context/CartContext';
import { Product } from '../../types/product';  // Correct import for the Product type

interface CartDetailsProps {
  product: Product;  // Use the imported Product type
}

const CartDetails: React.FC<CartDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Correct usage of the product type
    }
  };

  return (
    <div className="card-details">
      <h1>{product.title}</h1>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CartDetails;
