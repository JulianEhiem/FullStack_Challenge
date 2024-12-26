package post;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class PostClientTest {

    @Test
    @DisplayName("Response status of 200 should be returned when a request is made")
    public void should_return_200_when_request_is_made() throws IOException, InterruptedException {
        PostClient postClient = new PostClient();
        assertEquals(200, postClient.getPosts());
    }

}