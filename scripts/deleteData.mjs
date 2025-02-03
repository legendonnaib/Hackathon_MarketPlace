import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '9btvb89l',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skTa6wULlzZwsj2MYoEVRfhG4E1pwroqU640daYqfMOxoPPtb5MAHOtSYDRlJRbFcYh5ttfqEYocS69KXmWg79HKXPppupAHux4lxfDubY0CqNfTITOlvVgAX5y8QXs11TwuLRWP5FOYPJ2SDL52xK3qwozWrnfw1mrMagTAhWFgrBcSW5Ub',
});

async function deleteAllProducts() {
  try {
    // Fetch all product documents
    const products = await client.fetch('*[_type == "product"]');
    
    // Check if products are being fetched
    console.log(`Fetched ${products.length} products.`);

    if (products.length === 0) {
      console.log('No products to delete.');
      return;
    }

    // Loop through and delete each product by its ID
    for (const product of products) {
      console.log(`Deleting product with ID: ${product._id}`);
      await client.delete(product._id);
      console.log(`Deleted product: ${product.title}`);
    }

    console.log('All products have been deleted.');
  } catch (error) {
    console.error('Error deleting products:', error);
  }
}

deleteAllProducts();
