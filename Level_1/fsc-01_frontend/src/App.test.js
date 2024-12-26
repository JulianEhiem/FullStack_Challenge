import {test, expect} from "vitest";
import {Sum} from "./App.jsx";


test('Adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3);
})

// test('useProductQuery should return a list of products or empty array', () => {
//     const productResponse = [
//         {
//             id: '1',
//             name: 'Product 1',
//         }
//     ];
//     fetch.mockResolvedValue(createFetchResponse(productResponse));
//     const products = useProductsQuery();
//     expect(products).toBeInstanceOf(Array);
// })