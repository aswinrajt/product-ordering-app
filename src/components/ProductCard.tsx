import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Plus } from "lucide-react";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border glass shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-strong">
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-base font-semibold">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-gradient font-display text-lg font-bold">{formatPrice(product.price)}</span>
          <button
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to order`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:glow-strong focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
