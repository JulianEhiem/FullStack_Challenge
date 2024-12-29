import {assert, describe, it} from "vitest";
import {
    mockProductsSortedByBestSellers, mockProductsSortedByCustomerReviews,
    mockProductsSortedByFeatured,
    mockProductsSortedByNewArrivals, mockProductsSortedByPriceAscending, mockProductsSortedByPriceDescending,
    mockProductsUnfiltered
} from "../testingData/mockProducts";
import {
    bestSellersSorter,
    customerReviewSorter,
    featuredSorter,
    newArrivalsSorter, priceSorter
} from "../../src/utils/sortingHelper";


describe("sortingHelper implementing", () => {
    describe("featuredSorter", () => {
        it("should sort Products object by 'Featured' first", () => {
            assert.deepStrictEqual(featuredSorter(mockProductsUnfiltered), mockProductsSortedByFeatured);
        })
    })

    describe("newArrivalsSorter", () => {
        it("should sort Products object by 'New Arrivals' first", () => {})
        assert.deepStrictEqual(newArrivalsSorter(mockProductsUnfiltered), mockProductsSortedByNewArrivals);
    })

    describe("bestSellersSorter", () => {
        it("should sort Products object by 'Best Sellers' first", () => {
            assert.deepStrictEqual(bestSellersSorter(mockProductsUnfiltered), mockProductsSortedByBestSellers);
        })
    })

    describe("customerReviewSorter", () => {
        it("should sort Products object by highest 'Customer Reviews' first", () => {
            assert.deepStrictEqual(customerReviewSorter(mockProductsUnfiltered), mockProductsSortedByCustomerReviews);
        })
    })

    describe("priceSorter", () => {
        it("should sort Products object by 'price' depending on 'ascending' or 'descending' flag", () => {
            assert.deepStrictEqual(priceSorter(mockProductsUnfiltered, "ascending"), mockProductsSortedByPriceAscending);
            assert.deepStrictEqual(priceSorter(mockProductsUnfiltered, "descending"), mockProductsSortedByPriceDescending);
        })
    })
})

