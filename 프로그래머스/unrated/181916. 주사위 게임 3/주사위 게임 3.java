import java.util.Arrays;

class Solution {
    public int solution(int a, int b, int c, int d) {

        int[] i = { a, b, c, d };
        Arrays.sort(i);

        int answer = 0;

        if (i[0] == i[1] && i[1] == i[2] && i[2] == i[3]) {
            answer = 1111 * i[3];
        } else if (i[0] == i[2]) {
            answer = (int) Math.pow((10 * i[0] + i[3]), 2);
        } else if (i[1] == i[3]){
            answer = (int) Math.pow((10 * i[1] + i[0]), 2);
        } else if (i[0] == i[1] && i[2] == i[3]) {
            answer = (i[0] + i[3]) * (i[3] - i[0]);
        } else if (i[0] == i[1]) {
            answer = i[2] * i[3];
        } else if (i[1] == i[2]) {
            answer = i[0] * i[3];
        } else if (i[2] == i[3]) {
            answer = i[0] * i[1];
        } else {
            answer = i[0];
        }

        return answer;
    }
}