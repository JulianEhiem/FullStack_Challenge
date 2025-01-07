package com.stella;

import com.stella.controllers.ProductController;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Application {
    public static void main(String[] args) throws IOException {
        int port = 8000;

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        server.createContext("/", new ProductController());

        server.setExecutor(null);
        server.start();

        System.out.println("Server started on port " + port);
    }
}
