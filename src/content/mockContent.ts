import IphoneImg from "../assets/iphone.jpg";
import MilkImg from "../assets/milk.jpg";
import WineImg from "../assets/wine.jpg";
import type { ProductCardProps } from "../components/ProductCard/ProductCardProps";

export const mockProducts: ProductCardProps[] = [
  {
    title: "Iphone X",
    origin: "USA",
    price: 79900,
    currency: "USD",
    imageUrl: IphoneImg,
  },
  {
    title: "Milk",
    origin: "Columbia",
    price: 34900,
    imageUrl: MilkImg,
  },
  {
    title: "Wine",
    origin: "France",
    price: 249900,
    currency: "EUR",
    imageUrl: WineImg,
  },
];
