import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

type Props = {
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
};

export function CategoryList({ activeCategoryId, onSelectCategory }: Props) {
  return (
    <nav aria-label="Product categories">
      <ul className="-mx-4 -mt-2 flex gap-3 overflow-x-auto px-4 pt-3 pb-3 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          const Icon = category.icon;
          return (
            <li key={category.id} className="shrink-0">
              <button
                onClick={() => onSelectCategory(category.id)}
                aria-pressed={isActive}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
                  isActive
                    ? "border-primary/60 bg-primary text-primary-foreground glow-strong"
                    : "border-border/70 glass text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:glow",
                )}
              >
                <Icon className="size-4.5" aria-hidden="true" />
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
