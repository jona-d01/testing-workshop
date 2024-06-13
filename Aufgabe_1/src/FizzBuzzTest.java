import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FizzBuzzTest {

    @Test
    public void whenIs1_thenReturn1() {
        assertEquals("1", FizzBuzz.of(1));
    }

}