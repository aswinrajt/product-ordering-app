import { Beef, Pizza, CupSoda, IceCreamCone, type LucideIcon } from "lucide-react";

export type Category = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { id: "burgers", name: "Burgers", icon: Beef },
  { id: "pizza", name: "Pizza", icon: Pizza },
  { id: "drinks", name: "Drinks", icon: CupSoda },
  { id: "desserts", name: "Desserts", icon: IceCreamCone },
];
