import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Map;

public class ApplicationServer {
    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        server.createContext("/", new postsHandler());

        server.setExecutor(null);
        server.start();

        System.out.println("Server is running on port 8000");
    }

    public static class postsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String response = generateResponse();
            System.out.println(response);
            exchange.sendResponseHeaders(200, response.length());
            OutputStream outStream = exchange.getResponseBody();
            outStream.write(response.getBytes());
            outStream.close();
        }

        public String generateResponse() {
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("message", "Hello World!");
            responseMap.put("status", "success");
            String jsonResponse = "";

            try{
                ObjectMapper objectMapper = new ObjectMapper();
                jsonResponse = objectMapper.writeValueAsString(responseMap);

            }catch (Exception e) {
                e.printStackTrace();
            }
//            return "This is a response";
            return jsonResponse;
        }
    }

}