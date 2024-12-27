export interface ProductType {
    id: number;
    item_type: string;
    brand: string;
    name: string;
    color: string;
    size: number;
    price: number;
    quantity: number;
    imageId: string;
    tag?: string;
}