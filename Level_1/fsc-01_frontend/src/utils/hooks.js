import {useQuery} from "@tanstack/react-query";
import {fetchAllProducts} from "./queries.js";

export const useProductsQuery = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts,
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
        retry: true,
    });
    return {productsData: data, isLoading};
}