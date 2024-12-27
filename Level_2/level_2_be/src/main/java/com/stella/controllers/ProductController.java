package com.stella.controllers;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class ProductController implements HttpHandler {

    public static String path = "src/main/resources/helloWorld.txt";

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = generateResponseFrom(path);
        exchange.sendResponseHeaders(200, response.length());
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    public static String generateResponseFrom(String path){
        Path filePath = Path.of(path);
        StringBuilder sb = new StringBuilder();

        try{
            List<String> lines = Files.readAllLines(filePath);
            for(String line : lines){
                sb.append(line);
            }
        } catch (Exception e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
        return sb.toString();
    }
}
