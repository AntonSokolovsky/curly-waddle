export function formatPrice(price: number, currency: string = "RUB") {
  const majorUnits = price / 100;

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: "symbol",
  })
    .format(majorUnits)
    .replace(/\s/g, "");
}
