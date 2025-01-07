package com.stella.controllers;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.*;

class ProductControllerTest {

    static Path path;
    static File file;
    static String message = "[" +
            "{" +
            "\"id\":1," +
            "\"item_type\":\"boot\"," +
            "\"brand\":\"Bruno Marc\"," +
            "\"name\":\"Chelsea Highs\"," +
            "\"color\":\"Khaki\"," +
            "\"avg_review\":0.0," +
            "\"avg_monthly_sales\":0.0," +
            "\"size\":7.5," +
            "\"price\":197.61," +
            "\"quantity\":35," +
            "\"imageId\":\"product_brown_shoe_1\"," +
            "\"tag\":\"New Arrival\"" +
            "}]";

    @TempDir
    static Path tempDir;

    @BeforeAll
    public static void setup() throws IOException {
        path = tempDir.resolve("testFile.txt");
        file = path.toFile();
        try(FileWriter fileWriter = new FileWriter(file)) {
            fileWriter.write(message);
        }
    }

    @Test
    @DisplayName("Should generate the expected response when given a path to a response file")
    void generateResponse() throws IOException {
        String resolvedPath = path.toString();
        assertEquals(message, ProductController.generateResponseFrom(resolvedPath));
    }
}