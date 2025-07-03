import { ProductCard } from "./components/ProductCard";
import { mockProducts } from "./content/mockContent";

function App() {
  return (
    <>
      {mockProducts.map((mockProduct, index) => (
        <ProductCard key={index} {...mockProduct} />
      ))}
    </>
  );
}

export default App;
