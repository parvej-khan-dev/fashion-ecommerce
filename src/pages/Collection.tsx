import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

export const Collection = () => {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id === categoryId);
  const filteredProducts = products.filter(product => product.category === categoryId);

  if (!category) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="pt-16">
      <div className="relative h-64">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-lg">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};