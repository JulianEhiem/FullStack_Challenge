export interface ProductType {
    id: number;
    item_type: string;
    brand: string;
    name: string;
    color: string;
    avg_review: number;
    avg_monthly_sales: number;
    size: number;
    price: number;
    quantity: number;
    imageId: string;
    tag?: 'Featured'| 'New Arrival' |null;
}

export enum viewTypes {
    R = "rowView",
    G = "gridView",
}

export enum sortType {
    priceAscending = "Price: Low to High",
    priceDescending = "Price: High to Low",
    customerReview = "Customer Review",
    newestArrival = "Newest Arrivals",
    bestSellers = "Best Sellers",
    featured = "Featured",
}