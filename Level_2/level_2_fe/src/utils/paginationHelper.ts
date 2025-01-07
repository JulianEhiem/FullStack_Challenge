import {ProductType} from "../types.ts";

export const paginate = (num: number, page: number, array: ProductType[]) => {
    const start = page == 1 ? 0 : (page - 1) * num
    const end = start + num;
    return array.slice(start, end);
}