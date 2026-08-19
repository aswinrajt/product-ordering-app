import type { CartItem as CartItemType } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";
import { Minus, Plus, Trash2 } from "lucide-react";

type Props = {
  item: CartItemType;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
};

const stepButtonClass =
  "flex size-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none";

export function CartItem({ item, onIncrease, onDecrease, onRemove }: Props) {
  const lineTotal = item.price * item.quantity;

  return (
    <li className="flex gap-4 border-b border-border py-4 last:border-b-0 last:pb-0 first:pt-0">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        width={80}
        height={80}
        className="size-16 shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-semibold">{item.name}</p>
            <p className="text-sm font-bold text-primary">{formatPrice(item.price)}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from order`}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
          >
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onDecrease(item.id)}
              aria-label={`Decrease quantity of ${item.name}`}
              className={stepButtonClass}
            >
              <Minus className="size-3.5" aria-hidden="true" />
            </button>
            <span className="min-w-6 text-center text-sm font-semibold" aria-live="polite">
              {item.quantity}
            </span>
            <button
              onClick={() => onIncrease(item.id)}
              aria-label={`Increase quantity of ${item.name}`}
              className={stepButtonClass}
            >
              <Plus className="size-3.5" aria-hidden="true" />
            </button>
          </div>
          <span className="text-sm font-bold">{formatPrice(lineTotal)}</span>
        </div>
      </div>
    </li>
  );
}
