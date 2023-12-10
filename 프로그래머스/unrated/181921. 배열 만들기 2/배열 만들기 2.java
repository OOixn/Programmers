import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Solution {
    public static List<Integer> solution(int l, int r) {
        List<Integer> result = IntStream.rangeClosed(l, r)
                .filter(number -> includ05(number))
                .boxed()
                .collect(Collectors.toList());
        if (result.isEmpty()) {
            result.add(-1);
        }

        return result;
    }

    public static boolean includ05(int number) {
        String numberStr = Integer.toString(number);
        return numberStr.matches("[05]+");
    }
    
    }