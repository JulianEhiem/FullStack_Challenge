import {fetchAllProducts} from "../services/queries.ts";
import {useQuery} from "@tanstack/react-query";

export const useProductsQuery = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts,
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
        retry: true
    });
    return {products: data, isLoading};
}

