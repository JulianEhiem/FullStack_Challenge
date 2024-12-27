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
    static String message = "Hello Kazakhstan!";

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
    void generateResponse() {
        assertEquals(message, ProductController.generateResponse(path.toString()));
    }
}