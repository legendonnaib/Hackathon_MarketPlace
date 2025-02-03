import { groq } from "next-sanity";

// Fetch all products
export const allProducts = groq`*[_type == "product"]`;

// Fetch a single product by slug
export const getProductBySlug = groq`
  *[_type == "product" && slug.current == $slug][0]
`;
;

