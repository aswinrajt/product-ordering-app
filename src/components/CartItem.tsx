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
  "px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none";

export function CartItem({ item, onIncrease, onDecrease, onRemove }: Props) {
  return (
    <li className="flex gap-3 rounded-xl border border-border bg-background p-3">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        width={768}
        height={768}
        className="size-16 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate font-semibold">{item.name}</p>
            <p className="text-sm text-muted-foreground">
              {formatPrice(item.price)} × {item.quantity}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from order`}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
          >
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-center overflow-hidden rounded-lg border border-border">
            <button
              onClick={() => onDecrease(item.id)}
              aria-label={`Decrease quantity of ${item.name}`}
              className={stepButtonClass}
            >
              <Minus className="size-3.5" aria-hidden="true" />
            </button>
            <span className="min-w-7 text-center text-sm font-semibold" aria-live="polite">
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
          <span className="text-sm font-bold">{formatPrice(item.price * item.quantity)}</span>
        </div>
      </div>
    </li>
  );
}
