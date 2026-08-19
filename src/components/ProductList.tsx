import type { Product } from "@/data/products";
import type { CartItem } from "@/hooks/useCart";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

export function ProductList({ products, cartItems, onAddToCart, onIncrease, onDecrease }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cartItem?.quantity ?? 0}
            onAddToCart={onAddToCart}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        );
      })}
    </div>
  );
}
