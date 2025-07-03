import { ProductCard } from "./components/ProductCard";
import { mockProduct } from "./content/mockContent";

function App() {
  return (
    <>
      <ProductCard {...mockProduct} />
    </>
  );
}

export default App;
