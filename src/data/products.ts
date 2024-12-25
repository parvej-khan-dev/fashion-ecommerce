import { Product } from '../types/product';

export const products: Product[] = [
  // T-Shirts
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800',
    description: 'Premium cotton classic white t-shirt, perfect for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'tshirts'
  },
  {
    id: '2',
    name: 'Black Essential Tee',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800',
    description: 'Comfortable black t-shirt made from organic cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'tshirts'
  },
  // Shoes
  {
    id: '3',
    name: 'Urban Runner Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    sizes: ['7', '8', '9', '10', '11'],
    category: 'shoes'
  },
  {
    id: '4',
    name: 'Classic Canvas Shoes',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800',
    description: 'Timeless canvas shoes that go with everything.',
    sizes: ['7', '8', '9', '10', '11'],
    category: 'shoes'
  },
  // Pants
  {
    id: '5',
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800',
    description: 'Classic slim fit jeans in dark wash.',
    sizes: ['30', '32', '34', '36'],
    category: 'pants'
  },
  {
    id: '6',
    name: 'Cargo Pants',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800',
    description: 'Versatile cargo pants with multiple pockets.',
    sizes: ['30', '32', '34', '36'],
    category: 'pants'
  },
  // Hoodies
  {
    id: '7',
    name: 'Classic Pullover Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800',
    description: 'Comfortable cotton blend hoodie for everyday wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'hoodies'
  },
  {
    id: '8',
    name: 'Tech Fleece Zip Hoodie',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=800',
    description: 'Modern zip-up hoodie with tech fleece fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'hoodies'
  }
];