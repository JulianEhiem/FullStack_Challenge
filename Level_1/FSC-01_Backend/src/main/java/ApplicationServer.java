import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import data.Product;
import data.Products;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ApplicationServer {
    public static void main(String[] args) throws IOException {
        int port = 8000;

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        server.createContext("/", new postsHandler());

        server.setExecutor(null);
        server.start();

        System.out.println("Server is running on port " + port);
    }

    public static class postsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String response = generateResponse();
            exchange.getResponseHeaders().add("Content-Type", "application/json");
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            exchange.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
            exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,HEAD");
            exchange.sendResponseHeaders(200, response.length());
            OutputStream outStream = exchange.getResponseBody();
            outStream.write(response.getBytes());
            outStream.close();
        }

        public String generateResponse() {
            String jsonResponse = "";
            try{
                ObjectMapper objectMapper = new ObjectMapper();
                List<Product> mockProduct = objectMapper.readValue(new File("src/main/java/data/mockData.json"), objectMapper.getTypeFactory().constructCollectionType(List.class, Product.class));
                jsonResponse = objectMapper.writeValueAsString(mockProduct);
            }catch (Exception e) {
                e.printStackTrace();
            }
//            System.out.println(jsonResponse);
            return jsonResponse;
        }
    }

}