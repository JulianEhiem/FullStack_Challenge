import {ProductType} from "./types.ts";
import {ProductCard} from "./components/product/ProductCard.tsx";

const sampleProduct: ProductType = {
    "id": 2,
    "item_type": "shoe",
    "brand": "Bruno Marc",
    "name": "Boat Classic",
    "color": "Puce",
    "size": 9,
    "price": 285.25,
    "quantity": 29,
    "imageId": "product_brown_boots_1",
    "tag": "New Arrival"
}

function App() {

  return (
    <>
        <ProductCard product={sampleProduct} />
    </>
  )
}

export default App
