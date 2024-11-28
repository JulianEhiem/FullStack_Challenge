import todo.TodoClient;

import java.io.IOException;
import java.net.http.HttpRequest;

public class Application {
    public static void main(String[] args) throws IOException, InterruptedException {

        TodoClient todoClient = new TodoClient();
        System.out.println(todoClient.findAll());

//        System.out.println("Hello world!");
    }

    public int add(int a, int b) { return a + b; }

}