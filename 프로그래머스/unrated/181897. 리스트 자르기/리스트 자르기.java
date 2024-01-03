import java.util.ArrayList;

public class Solution {
    public ArrayList<Integer> solution(int n, int[] slicer, int[] numList) {
        int a = slicer[0];
        int b = slicer[1];
        int c = slicer[2];
        ArrayList<Integer> answer = new ArrayList<>();

        switch(n) {
            case 1:
                for (int i = 0; i <= b; i++) {
                    answer.add(numList[i]);
                }
                break;
            case 2:
                for (int i = a; i < numList.length; i++) {
                    answer.add(numList[i]);
                }
                break;
            case 3:
                for (int i = a; i <= b; i++) {
                    answer.add(numList[i]);
                }
                break;
            case 4:
                for (int i = a; i <= b; i += c) {
                    answer.add(numList[i]);
                }
                break;
        }

        return answer;
    }
}
