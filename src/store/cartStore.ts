import { create } from 'zustand';
import { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
  size: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1, size }],
      };
    });
  },
  removeItem: (productId, size) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === productId && item.size === size)
      ),
    }));
  },
  updateQuantity: (productId, size, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  total: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));