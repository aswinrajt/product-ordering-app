import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export function ProductList({ products, onAddToCart }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
