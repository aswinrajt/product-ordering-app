import { useMemo, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CategoryList } from "@/components/CategoryList";
import { ProductList } from "@/components/ProductList";
import { Cart } from "@/components/Cart";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";

export function MenuPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]!.id);
  const productsRef = useRef<HTMLDivElement>(null);
  const {
    items,
    total,
    count,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const visibleProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeCategoryId),
    [activeCategoryId],
  );

  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none fixed inset-0 [mask-image:radial-gradient(90%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative">
      <Navbar cartCount={count} onLogout={clearCart} />
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-8">
        <section className="min-w-0">
          <h1 className="text-gradient font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Browse the menu
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick a category and add your favourites to the order.
          </p>
          <div className="mt-5">
            <CategoryList
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>
          <div ref={productsRef} className="mt-6 scroll-mt-24">
            <ProductList products={visibleProducts} onAddToCart={addToCart} />
          </div>
        </section>
        <Cart
          items={items}
          total={total}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClear={clearCart}
          onBrowseProducts={() =>
            productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        />
      </main>
      </div>
    </div>
  );
}
