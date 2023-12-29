class Solution {
    public int[] solution(String my_string) {
        int[] answer = new int[52];
        for(int i = 0; i < my_string.length(); i ++){
            char a = my_string.charAt(i);
            
            if(Character.isUpperCase(a)){
                
                int index = a - 'A';
                answer[index]++;
                
            } else if(Character.isLowerCase(a)){
                
                int index = 26 + a - 'a';
                answer[index]++;    
                    
            }
            
        }
        return answer;
    }
}