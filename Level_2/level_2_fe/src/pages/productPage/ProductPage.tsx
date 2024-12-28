import styles from "./ProductPage.module.css";
import {useProductsQuery} from "../../hooks/useProductsQuery.ts";
import {ProductType} from "../../types.ts";
import {ProductCard} from "../../components/product/ProductCard.tsx";
import ToggleView from "./ToggleView.tsx";

export const ProductPage = () => {
    const {products} = useProductsQuery();

    return (
        <>
            <ToggleView/>
            <div className={styles.container}>
                {products && products.map((product: ProductType) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>

    )
}