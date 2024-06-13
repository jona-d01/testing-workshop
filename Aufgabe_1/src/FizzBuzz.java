public class FizzBuzz {
    private static final String FIZZ = "Fizz";
    private static final String BUZZ = "Buzz";

    static String of(int input) {
        String result = "";
        if(isFactorOf(input, 3)){
            result += FIZZ;
        }

        if(isFactorOf(input, 5)){
            result += BUZZ;
        }

        return result.isEmpty() ? String.valueOf(input) : result;
    }

    private static boolean isFactorOf(int number, int factor) {
        return number % factor == 0;
    }

}