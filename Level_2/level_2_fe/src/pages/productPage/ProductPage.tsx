import styles from "./ProductPage.module.css";
import {useProductsQuery} from "../../hooks/useProductsQuery.ts";
import {ProductType, viewTypes} from "../../types.ts";
import {ProductCard} from "../../components/product/ProductCard.tsx";
import ToggleView from "./ToggleView.tsx";
import {useEffect, useState} from "react";
import {SMALL_SCREEN_SIZE_BOUNDARY} from "../../utils/constants.ts";
import useWindowWidth from "../../hooks/useWindowWidth.ts";

export const ProductPage = () => {
    const [productListMode, setProductListMode] = useState<viewTypes>(viewTypes.G);

    const windowWidth = useWindowWidth();

    useEffect(() => {
        if(windowWidth < SMALL_SCREEN_SIZE_BOUNDARY) setProductListMode(viewTypes.G);
    }, [windowWidth]);


    const setViewGrid = () => setProductListMode(viewTypes.G);
    const setViewRow = () => setProductListMode(viewTypes.R);

    const {products} = useProductsQuery();

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <ToggleView
                toggleState={productListMode}
                setGrid={setViewGrid}
                setRow={setViewRow}
                hide={windowWidth < SMALL_SCREEN_SIZE_BOUNDARY}
            />
            <div className={styles.container}>
                {products && products.map((product: ProductType) => (
                    <div key={product.id} style={{ display: "flex", justifyContent: "center", flex:`${productListMode == viewTypes.R ? "100%" : 1}`}}>
                        <ProductCard product={product} horizontal={productListMode == viewTypes.R}/>
                    </div>
                ))}
            </div>
        </div>

    )
}