import chickenBurger from "@/assets/chicken-burger.jpg";
import cheeseBurger from "@/assets/cheese-burger.jpg";
import beefBurger from "@/assets/beef-burger.jpg";
import chickenPizza from "@/assets/chicken-pizza.jpg";
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import cola from "@/assets/cola.jpg";
import freshLime from "@/assets/fresh-lime.jpg";
import orangeJuice from "@/assets/orange-juice.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import brownie from "@/assets/brownie.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};

export const products: Product[] = [
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Crispy fried chicken, lettuce and house mayo",
    price: 150,
    image: chickenBurger,
    categoryId: "burgers",
  },
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    description: "Double patty loaded with molten cheddar",
    price: 180,
    image: cheeseBurger,
    categoryId: "burgers",
  },
  {
    id: "classic-beef-burger",
    name: "Classic Beef Burger",
    description: "Grilled beef patty, fresh lettuce and tomato",
    price: 200,
    image: beefBurger,
    categoryId: "burgers",
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    description: "Grilled chicken chunks with mozzarella",
    price: 250,
    image: chickenPizza,
    categoryId: "pizza",
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "Tomato, mozzarella and fresh basil",
    price: 220,
    image: margheritaPizza,
    categoryId: "pizza",
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni over a cheesy base",
    price: 280,
    image: pepperoniPizza,
    categoryId: "pizza",
  },
  {
    id: "coca-cola",
    name: "Coca Cola",
    description: "Chilled classic cola served over ice",
    price: 60,
    image: cola,
    categoryId: "drinks",
  },
  {
    id: "fresh-lime",
    name: "Fresh Lime",
    description: "Zesty lime soda with mint leaves",
    price: 70,
    image: freshLime,
    categoryId: "drinks",
  },
  {
    id: "orange-juice",
    name: "Orange Juice",
    description: "Freshly squeezed seasonal oranges",
    price: 90,
    image: orangeJuice,
    categoryId: "drinks",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    description: "Rich cocoa sponge with dark ganache",
    price: 130,
    image: chocolateCake,
    categoryId: "desserts",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    description: "Creamy vanilla scoops in a bowl",
    price: 80,
    image: iceCream,
    categoryId: "desserts",
  },
  {
    id: "brownie",
    name: "Brownie",
    description: "Fudgy brownie with chocolate chunks",
    price: 110,
    image: brownie,
    categoryId: "desserts",
  },
];
