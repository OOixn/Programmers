class Solution {
    public int solution(String my_string, String is_suffix) {
        boolean a = my_string.endsWith(is_suffix);
        
        int answer = a ? 1 : 0;
        return answer;
    }
}
