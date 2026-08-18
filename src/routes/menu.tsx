import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/pages/MenuPage";
import { RequireAuth } from "@/components/RequireAuth";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Spice Route Food Ordering" },
      {
        name: "description",
        content:
          "Browse burgers, pizza, drinks and desserts by category, add items to your cart and see your total update instantly.",
      },
      { property: "og:title", content: "Menu | Spice Route Food Ordering" },
      {
        property: "og:description",
        content: "Browse categories, add items to your cart and see your order total instantly.",
      },
    ],
  }),
  component: () => (
    <RequireAuth>
      <MenuPage />
    </RequireAuth>
  ),
});
