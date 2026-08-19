import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Minus, Plus } from "lucide-react";

type Props = {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

const stepButtonClass =
  "flex size-7 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none";

export function ProductCard({ product, quantity, onAddToCart, onIncrease, onDecrease }: Props) {
  const inCart = quantity > 0;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-strong">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {inCart && (
          <span className="absolute bottom-3 right-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-md">
            {quantity}  in order
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-base font-semibold">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-gradient font-display text-lg font-bold">{formatPrice(product.price)}</span>
          {inCart ? (
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/70 p-1">
              <button
                onClick={() => onDecrease(product.id)}
                aria-label={`Decrease quantity of ${product.name}`}
                className={stepButtonClass}
              >
                <Minus className="size-3.5" aria-hidden="true" />
              </button>
              <span className="min-w-5 text-center text-sm font-semibold" aria-live="polite">
                {quantity}
              </span>
              <button
                onClick={() => onIncrease(product.id)}
                aria-label={`Increase quantity of ${product.name}`}
                className={stepButtonClass}
              >
                <Plus className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              aria-label={`Add ${product.name} to order`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:glow-strong focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95"
            >
              <Plus className="size-4" aria-hidden="true" />
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
