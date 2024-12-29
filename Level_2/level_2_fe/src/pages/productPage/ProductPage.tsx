import styles from "./ProductPage.module.css";
import {useProductsQuery} from "../../hooks/useProductsQuery.ts";
import {ProductType, sortType, viewTypes} from "../../types.ts";
import {ProductCard} from "../../components/product/ProductCard.tsx";
import ToggleView from "./ToggleView.tsx";
import {useEffect, useState} from "react";
import {SMALL_SCREEN_SIZE_BOUNDARY} from "../../utils/constants.ts";
import useWindowWidth from "../../hooks/useWindowWidth.ts";
import SortFilter from "./SortFilter.tsx";
import {
    bestSellersSorter,
    customerReviewSorter,
    featuredSorter,
    newArrivalsSorter,
    priceSorter
} from "../../utils/sortingHelper.ts";

export const ProductPage = () => {
    const [productListMode, setProductListMode] = useState<viewTypes>(viewTypes.G);

    const [filteredProducts, setFilteredProducts] = useState<ProductType[] | null>(null);

    const windowWidth = useWindowWidth();
    const {products} = useProductsQuery();

    useEffect(() => {
        if(windowWidth < SMALL_SCREEN_SIZE_BOUNDARY) setProductListMode(viewTypes.G);
    }, [windowWidth]);

    const handleSortProducts = (typeOfSort: sortType|string) => {
        switch(typeOfSort) {
            case "Price: Low to High": setFilteredProducts(priceSorter(products, "ascending")); break;
            case "Price: High to Low":setFilteredProducts(priceSorter(products, "descending"));break;
            case "Customer Review":setFilteredProducts(customerReviewSorter(products)); break;
            case "Newest Arrivals":setFilteredProducts(newArrivalsSorter(products)); break;
            case "Best Sellers":setFilteredProducts(bestSellersSorter(products)); break;
            case "Featured":setFilteredProducts(featuredSorter(products)); break;
            default:
                setFilteredProducts(products);
        }
    }


    const setViewGrid = () => setProductListMode(viewTypes.G);
    const setViewRow = () => setProductListMode(viewTypes.R);

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ToggleView
                    toggleState={productListMode}
                    setGrid={setViewGrid}
                    setRow={setViewRow}
                    hide={windowWidth < SMALL_SCREEN_SIZE_BOUNDARY}
                />
                <SortFilter updateProductOrder={handleSortProducts} />
            </div>

            <div className={styles.container}>
                {(filteredProducts === null && products) ? featuredSorter(products).map((product: ProductType) => (
                    <div key={product.id} style={{ display: "flex", justifyContent: "center", flex:`${productListMode == viewTypes.R ? "100%" : 1}`}}>
                        <ProductCard product={product} horizontal={productListMode == viewTypes.R}/>
                    </div>
                )) : filteredProducts && filteredProducts.map((product: ProductType) => (
                    <div key={product.id} style={{ display: "flex", justifyContent: "center", flex:`${productListMode == viewTypes.R ? "100%" : 1}`}}>
                        <ProductCard product={product} horizontal={productListMode == viewTypes.R}/>
                    </div>
                ))}
                hey
            </div>
        </div>

    )
}