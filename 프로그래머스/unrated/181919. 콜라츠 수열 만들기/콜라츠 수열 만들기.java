import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n) {
        List<Integer> array = new ArrayList<>();
        
        while(n != 1){
            array.add(n);
            if(n % 2 == 0){
                n/=2;
            }else{
                n = 3 * n + 1;
            }   
        }
        array.add(n);
        
        int result[] = new int [array.size()];
        for(int i = 0; i < array.size(); i++){
            result[i] = array.get(i);
        }
        return result;
    }
}