import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ApplicationTest {

    @Test
    public void twoPlusTwoShouldEqualFour() {
        var main = new Application();
        assertEquals(4, main.add(2,2));
    }

}