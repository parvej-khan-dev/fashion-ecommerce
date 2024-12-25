import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export const CategoriesSection = () => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-200 text-sm">{category.description}</p>
                <Link
                  to={`/collection/${category.id}`}
                  className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};