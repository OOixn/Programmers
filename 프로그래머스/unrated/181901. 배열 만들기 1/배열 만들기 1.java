import java.util.ArrayList;

class Solution {
    public int[] solution(int n, int k) {
        ArrayList<Integer> list = new ArrayList<>();

        for(int i = 1; i <= n; i++){
            if (i % k == 0){
                list.add(i);
            }
        }
        
        int[] answer = new int[list.size()];
        for(int j = 0; j < list.size(); j++){
        answer[j] = list.get(j);
        }
        
        return answer;
    }
}