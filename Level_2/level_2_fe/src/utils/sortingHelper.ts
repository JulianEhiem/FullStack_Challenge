import {ProductType, sortType} from "../types.ts";
import {BEST_SELLER_SALES_THRESHOLD} from "./constants.ts";

export const featuredSorter = (products: ProductType[]) => {
    const productsCopy = [...products];
    productsCopy.sort((a:ProductType, b:ProductType) => {
        if(a.tag === "Featured" && b.tag !== "Featured") return -1;
        if(a.tag !== "Featured" && b.tag === "Featured") return 1;
        return 0;
    });
    return productsCopy;
}

export const newArrivalsSorter = (products: ProductType[]) => {
    const productsCopy = [...products];
    productsCopy.sort((a:ProductType, b:ProductType) => {
        if(a.tag === "New Arrival" && b.tag !== "New Arrival") return -1;
        if(a.tag !== "New Arrival" && b.tag === "New Arrival") return 1;
        return 0;
    });
    return productsCopy;
}

export const bestSellersSorter = (products: ProductType[]) => {
    const productsCopy = [...products];
    productsCopy.sort((a:ProductType, b:ProductType) => {
        if(a.avg_monthly_sales >= BEST_SELLER_SALES_THRESHOLD && b.avg_monthly_sales < BEST_SELLER_SALES_THRESHOLD) return -1;
        if(a.avg_monthly_sales < BEST_SELLER_SALES_THRESHOLD && b.avg_monthly_sales >= BEST_SELLER_SALES_THRESHOLD) return 1;
        return 0;
    });
    return productsCopy;
}

export const customerReviewSorter = (products: ProductType[]) => {
    const productsCopy = [...products];
    productsCopy.sort((a:ProductType, b:ProductType) => b.avg_review - a.avg_review);
    return productsCopy;
}

export const priceSorter = (products: ProductType[], type: "ascending"|"descending") => {
    const productsCopy = [...products];
    if (type === "ascending") {
        productsCopy.sort((a:ProductType, b:ProductType) => a.price - b.price);
    }
    else productsCopy.sort((a:ProductType, b:ProductType) => b.price - a.price);
    return productsCopy;
}

export const sortingHandler = (typeOfSort: sortType | string, products: ProductType[]):ProductType[] => {
    const productsCopy = [...products];
    const sorters: Record<string, ProductType[]>= {
         "Price: Low to High": priceSorter(productsCopy, "ascending"),
         "Price: High to Low":priceSorter(productsCopy, "descending"),
         "Customer Review":customerReviewSorter(productsCopy),
         "Newest Arrivals":newArrivalsSorter(productsCopy),
         "Best Sellers":bestSellersSorter(productsCopy),
         "Featured":featuredSorter(productsCopy)
    }
    return  (sorters[typeOfSort] || sorters['Featured']);
}