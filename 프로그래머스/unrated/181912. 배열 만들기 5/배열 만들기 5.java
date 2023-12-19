import java.util.ArrayList;

class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        ArrayList<Integer> list = new ArrayList<>();
        
        for(int i = 0; i < intStrs.length; i++){
            String a = intStrs[i].substring(s, s + l);
            int num = Integer.parseInt(a);
            if(k < num){
                list.add(num);
            }
        }
        
        int[] answer = new int[list.size()];
        for(int j = 0; j < answer.length; j++){
            answer[j] = list.get(j);
        }
        
        return answer;
    }
}