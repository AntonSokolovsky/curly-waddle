import type { Currency } from "../../types/types";

export interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency?: Currency;
  imageUrl: string;
}
