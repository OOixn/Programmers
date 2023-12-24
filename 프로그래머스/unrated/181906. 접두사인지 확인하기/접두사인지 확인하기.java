class Solution {
    public int solution(String my_string, String is_prefix) {
        boolean a = my_string.startsWith(is_prefix);
        int answer = a ? 1 : 0;
        return answer;
    }
}