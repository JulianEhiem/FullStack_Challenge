import './App.css'
import {useProductsQuery} from "./utils/hooks.js";
import {ProductCard} from "./components/product/ProductCard.jsx";
import styles from "./App.module.css";


 function App() {
     const { productsData } = useProductsQuery();

    return (
        <>
            <div className={styles.AppContainer}>
                {productsData && productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default App
