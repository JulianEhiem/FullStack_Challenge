import com.sun.net.httpserver.HttpExchange;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.mockito.Mockito;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ApplicationServerTest {

    @Test
    @DisplayName("Verify postsHandler sends 200 status and correct response body")
    public void testPostsHandler() throws IOException {
        ApplicationServer.postsHandler handler = new ApplicationServer.postsHandler();

        HttpExchange exchange = Mockito.mock(HttpExchange.class);
        OutputStream mockOutputStream = new ByteArrayOutputStream();

        when(exchange.getResponseBody()).thenReturn(mockOutputStream);

        handler.handle(exchange);

        String actualResponse = handler.generateResponse();

        verify(exchange).sendResponseHeaders(200, actualResponse.length());
        assertEquals(actualResponse, mockOutputStream.toString());
    }
}