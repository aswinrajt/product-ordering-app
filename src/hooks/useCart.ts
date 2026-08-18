import { useCallback, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = Product & { quantity: number };

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const increaseQuantity = useCallback((id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }, []);

  const decreaseQuantity = useCallback((id: string) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  return {
    items,
    total,
    count,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
}
