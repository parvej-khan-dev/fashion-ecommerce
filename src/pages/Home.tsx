import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { ProductsSection } from '../components/products/ProductsSection';

export const Home = () => {
  return (
    <main className="pt-16">
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
};