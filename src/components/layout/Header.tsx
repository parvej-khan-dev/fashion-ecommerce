import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Cart } from '../cart/Cart';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">T-Style</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a
              href="#categories"
              className="text-gray-700 hover:text-indigo-600"
            >
              Categories
            </a>
            <a href="#products" className="text-gray-700 hover:text-indigo-600">
              Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Cart />
          </div>
          <div className="hidden md:flex">
            <Cart />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Home
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Categories
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Products
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
