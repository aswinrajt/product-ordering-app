import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/pages/LoginPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Login | Spice Route Food Ordering" },
      {
        name: "description",
        content:
          "Sign in to Spice Route to browse burgers, pizza, drinks and desserts and place your order.",
      },
      { property: "og:title", content: "Login | Spice Route Food Ordering" },
      {
        property: "og:description",
        content: "Sign in to Spice Route and order burgers, pizza, drinks and desserts.",
      },
    ],
  }),
  component: LoginPage,
});
