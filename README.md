# Product Ordering App

A responsive food ordering interface built with **React**, **TanStack Router**, **TanStack Start**, and **Tailwind CSS**. Users can browse categories, add items to their order, manage quantities, and place an order through a clean bottom-bar cart modal.

## Features

- **Login flow** with protected menu route
  - Demo credentials: `admin` / `123456`
  - Auth state is persisted in `localStorage`, so you stay logged in across page refreshes
- **Category browsing** for Burgers, Pizza, Drinks, and Desserts
- **Product cards** with inline quantity controls and an "in order" badge
- **Order summary bottom bar** that shows item count and total
- **Order modal** with item details, tax breakdown, and total
- **Order placed success modal** with order number, item count, and total paid
- **Responsive design** powered by Tailwind CSS and shadcn/ui components

## Tech Stack

- [React 19](https://react.dev/)
- [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [Radix UI](https://www.radix-ui.com/) primitives
- [Lucide React](https://lucide.dev/) icons
- TypeScript + Vite

## Project Structure

```
src/
├── components/      # Reusable UI components (Cart, ProductCard, Navbar, etc.)
├── components/ui/   # shadcn/ui components
├── context/         # React context providers (AuthContext)
├── data/            # Static product and category data
├── hooks/           # Custom hooks (useCart)
├── lib/             # Utility functions and formatters
├── pages/           # Page-level components (LoginPage, MenuPage)
├── routes/          # TanStack Router file routes
├── server.ts        # SSR server entry wrapper
└── start.ts         # TanStack Start configuration
```

## Getting Started

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script            | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start the development server             |
| `npm run build`   | Build the app for production             |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |
| `npm run format`  | Format code with Prettier                |

## Demo

- **Username:** `admin`
- **Password:** `123456`

After logging in, browse the menu, add items to your order, view the order from the bottom bar, and place the order to see the success confirmation.

## License

This project is built for personal learning and demonstration purposes.
