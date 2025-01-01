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
    featuredSorter, sortingHandler
} from "../../utils/sortingHelper.ts";
import {Pagination, Stack} from "@mui/material";
import ResultsPerPageSelector from "./ResultsPerPageSelector.tsx";

//TODO: Make into an external util fn
const productsOnPage = (num: number, page: number, array: ProductType[]) => {
    const start = page == 1 ? 0 : (page - 1) * num
    const end = start + num;
    return array.slice(start, end);
}

export const ProductPage = () => {
    const windowWidth = useWindowWidth();
    const {products, size} = useProductsQuery();
    const resultsPerPageOptions = [10,20,50,100];

    const [productListMode, setProductListMode] = useState<viewTypes>(viewTypes.G);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [filteredProducts, setFilteredProducts] = useState<ProductType[] | null>(null);

    useEffect(() => {
        if(windowWidth < SMALL_SCREEN_SIZE_BOUNDARY) setProductListMode(viewTypes.G);
    }, [windowWidth]);

    const handleSortProducts = (typeOfSort: sortType|string) => {
        setFilteredProducts(sortingHandler(typeOfSort, products))
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
                {(filteredProducts === null && products) ? productsOnPage(perPage, currentPage, featuredSorter(products)).map((product: ProductType) => (
                    <div key={product.id} style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: `${productListMode == viewTypes.R ? "100%" : 1}`
                    }}>
                        <ProductCard product={product} horizontal={productListMode == viewTypes.R}/>
                    </div>
                )) : filteredProducts && productsOnPage(perPage, currentPage, filteredProducts).map((product: ProductType) => (
                    <div key={product.id} style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: `${productListMode == viewTypes.R ? "100%" : 1}`
                    }}>
                        <ProductCard product={product} horizontal={productListMode == viewTypes.R}/>
                    </div>
                ))}
            </div>
            <div style={{display: "flex", justifyContent: "space-between", padding: "0 1rem 2rem"}}>
                <ResultsPerPageSelector initial={perPage + ''} handleChange={(e) => setPerPage(Number(e.target.value))}
                                        options={resultsPerPageOptions}/>
                <Stack spacing={2}>
                    <Pagination count={Math.ceil(size / perPage) || 1} onChange={(_e, page) => setCurrentPage(page)}
                                shape="rounded" size="large"/>
                </Stack>
            </div>
        </div>
    )
}