import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

export const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { items, removeItem, updateQuantity, total } = useCartStore();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    console.log('Proceeding to checkout with items:', items);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-gray-700 hover:text-indigo-600"
      >
        <ShoppingCart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 py-4 border-b">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, Math.max(0, item.quantity - 1))}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-red-500 p-1 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${total().toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};