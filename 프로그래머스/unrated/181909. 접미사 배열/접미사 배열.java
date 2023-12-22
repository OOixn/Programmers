import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public String[] solution(String my_string) {
        StringBuilder a = new StringBuilder(my_string);
        ArrayList<String> b = new ArrayList<>();
        
        for (int i = 0; i < my_string.length(); i++) {
            b.add(a.substring(i));
        }

        String[] answer = new String[b.size()];
        answer = b.toArray(answer);
        Arrays.sort(answer);
        
        return answer;
    }
}