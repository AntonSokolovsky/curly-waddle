import { formatPrice } from "../../utils/formatPrice";
import {
  Card,
  ImageCard,
  ImageContainer,
  InfoContainer,
  Origin,
  PriceCard,
  Title,
} from "./ProductCard.style";
import type { ProductCardProps } from "./ProductCardProps";

export function ProductCard({
  title,
  origin,
  price,
  currency = "RUB",
  imageUrl,
}: ProductCardProps) {
  return (
    <Card>
      <ImageContainer>
        <ImageCard src={imageUrl} alt={title} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Origin>Страна: {origin}</Origin>
        <PriceCard>{formatPrice(price, currency)}</PriceCard>
      </InfoContainer>
    </Card>
  );
}
