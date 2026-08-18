import type { CartItem as CartItemType } from "@/hooks/useCart";
import { CartItem } from "./CartItem";
import { formatPrice } from "@/lib/format";
import { ShoppingCart } from "lucide-react";

type Props = {
  items: CartItemType[];
  total: number;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onBrowseProducts: () => void;
};

export function Cart({
  items,
  total,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onBrowseProducts,
}: Props) {
  return (
    <aside
      aria-label="Order summary"
      className="relative overflow-hidden rounded-2xl border border-border glass p-4 glow lg:sticky lg:top-24"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-display text-lg font-bold">Your Order</h2>
        {items.length > 0 && (
          <button
            onClick={onClear}
            className="rounded-lg px-1.5 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
          >
            Clear
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-10 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <ShoppingCart className="size-7" aria-hidden="true" />
          </span>
          <p className="font-semibold">Your order is empty</p>
          <p className="text-sm text-muted-foreground">Add some tasty items to get started.</p>
          <button
            onClick={onBrowseProducts}
            className="mt-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-3">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </ul>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="font-medium text-foreground">{formatPrice(total)}</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Delivery</span>
              <span className="font-medium text-foreground">Free</span>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-3">
              <span className="font-semibold">Total</span>
              <span className="text-gradient font-display text-2xl font-bold">
                {formatPrice(total)}
              </span>
            </div>
          </div>
          <button className="mt-4 w-full rounded-xl bg-primary py-2.5 font-semibold tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:glow-strong focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-[0.99]">
            Place Order
          </button>
        </>
      )}
    </aside>
  );
}
