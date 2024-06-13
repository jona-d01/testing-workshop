import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FizzBuzzTest {

    @Test
    public void whenIs1_thenReturn1() {
        assertEquals("1", FizzBuzz.of(1));
    }

    @Test
    public void whenIs2_thenReturn2() {
        assertEquals("2", FizzBuzz.of(2));
    }

    @Test
    public void whenIs3_thenReturnFizz() {
        assertEquals("Fizz", FizzBuzz.of(3));
    }

    @Test
    public void whenIs4_thenReturn4() {
        assertEquals("4", FizzBuzz.of(4));
    }

    @Test
    public void whenIs5_thenReturnBuzz() {
        assertEquals("Buzz", FizzBuzz.of(5));
    }

    @Test
    public void whenIs6_thenReturnFizz() {
        assertEquals("Fizz", FizzBuzz.of(6));
    }

    @Test
    public void whenIs10_thenReturnBuzz() {
        assertEquals("Buzz", FizzBuzz.of(10));
    }

    @Test
    public void whenIs15_thenReturnFizzBuzz() {
        assertEquals("FizzBuzz", FizzBuzz.of(15));
    }

    @Test
    public void whenIs99_thenReturnFizz() {
        assertEquals("Fizz", FizzBuzz.of(99));
    }

    @Test
    public void whenIs100_thenReturnFizz() {
        assertEquals("Buzz", FizzBuzz.of(100));
    }
}