import React from 'react';
import { Product } from '../../types/product';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-2">
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};