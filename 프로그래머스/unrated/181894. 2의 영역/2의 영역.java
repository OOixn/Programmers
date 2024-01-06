import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr) {
        int startIndex = -1;
        int lastIndex = -1;
        
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == 2){
                startIndex = i;
                break;
            }
        }
        
        for(int i = arr.length - 1; i >= 0; i--){
            if(arr[i] == 2){
                lastIndex = i;
                break;
            } 
        }
        
        ArrayList<Integer> list = new ArrayList<>();
        
        if (startIndex != -1 && lastIndex != -1){
        for(int i = startIndex; i <= lastIndex; i++){
            list.add(arr[i]);
        }
            } else{
            list.add(-1);
        }
        
        int[] answer = new int[list.size()];
        for(int i = 0; i < list.size(); i++){
            answer[i] = list.get(i);
        }

        return answer;
    }
}