import React from 'react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1920"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium T-Shirts</h1>
        <p className="text-xl md:text-2xl mb-8">Discover your perfect style with our collection</p>
        <a
          href="#categories"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};