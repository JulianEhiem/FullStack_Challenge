import {ProductType} from "./types.ts";
import {ProductCard} from "./components/product/ProductCard.tsx";
import {useProductsQuery} from "./hooks/useProductsQuery.ts";

function App() {
    const {products} = useProductsQuery();
  return (
    <>
        {products && products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </>
  )
}

export default App
