import { useState } from "react";
import type { CartItem as CartItemType } from "@/hooks/useCart";
import { CartItem } from "./CartItem";
import { formatPrice } from "@/lib/format";
import { ArrowRight, ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  items: CartItemType[];
  total: number;
  count: number;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onBrowseProducts: () => void;
};

const TAX_RATE = 0.05;

export function Cart({
  items,
  total,
  count,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onBrowseProducts,
}: Props) {
  const [open, setOpen] = useState(false);
  const tax = Math.round(total * TAX_RATE);
  const grandTotal = total + tax;

  if (items.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-primary/20 bg-primary px-4 py-3.5 text-primary-foreground shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.25)] transition-transform active:scale-[0.995] sm:px-6"
          aria-label="View order"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
              <ShoppingBag className="size-5" aria-hidden="true" />
            </span>
            <div className="text-left leading-tight">
              <p className="text-sm font-semibold">
                {count} {count === 1 ? "item" : "items"}
              </p>
              <p className="text-xs opacity-90">{formatPrice(grandTotal)}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
            View Order
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="flex max-h-[85vh] max-w-md flex-col gap-0 overflow-hidden p-0 sm:rounded-2xl">
        <DialogHeader className="border-b border-border px-5 py-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              My Order
            </DialogTitle>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </div>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-12 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <ShoppingCart className="size-7" aria-hidden="true" />
            </span>
            <p className="font-semibold">Your order is empty</p>
            <p className="text-sm text-muted-foreground">Add some tasty items to get started.</p>
            <button
              onClick={() => {
                setOpen(false);
                onBrowseProducts();
              }}
              className="mt-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-end border-b border-border px-5 py-2">
              <button
                onClick={onClear}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
              >
                Clear all
              </button>
            </div>
            <ul className="flex flex-col gap-0 overflow-y-auto p-5">
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
            <div className="border-t border-border bg-secondary/30 px-5 py-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-medium text-foreground">{formatPrice(total)}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Tax &amp; charges (5%)</span>
                  <span className="font-medium text-foreground">{formatPrice(tax)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="font-semibold uppercase tracking-wide">Total</span>
                  <span className="text-gradient font-display text-2xl font-bold">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl bg-primary py-3 font-semibold tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:glow-strong focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-[0.99]">
                Place Order
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
