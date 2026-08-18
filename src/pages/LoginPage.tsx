import { Login } from "@/components/Login";
import chickenBurger from "@/assets/chicken-burger.jpg";

export function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="relative hidden lg:block">
        <img
          src={chickenBurger}
          alt="Freshly made chicken burger from the Spice Route kitchen"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative flex h-full flex-col justify-end p-10 text-background">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Fresh food, ordered in seconds.
          </h2>
          <p className="mt-2 max-w-sm text-sm opacity-90">
            Browse burgers, pizza, drinks and desserts, then build your order with a live running
            total.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center bg-hero px-4 py-12 sm:px-8">
        <Login />
      </section>
    </main>
  );
}
