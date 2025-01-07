package com.stella.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stella.models.Products;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

public class ProductController implements HttpHandler {

    public static String path = "src/main/resources/MOCK_DATA.json";


    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = generateResponseFrom(path);
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        exchange.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,HEAD");
        exchange.sendResponseHeaders(200, response.length());
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    public static String generateResponseFrom(String path){
        String jsonResponse = "";
        try{
            ObjectMapper objectMapper = new ObjectMapper();
            List<Products> mockProduct = objectMapper.readValue(new File(path), objectMapper.getTypeFactory().constructCollectionType(List.class, Products.class));
            jsonResponse = objectMapper.writeValueAsString(mockProduct);
        } catch(IOException e){
            e.printStackTrace();
        }
        return jsonResponse;
    }
}
