package com.stella.models;

public record Products(
        int id,
        String item_type,
        String brand,
        String name,
        String color,
        float size,
        float price,
        int quantity,
        String imageId,
        String tag
) {
}
