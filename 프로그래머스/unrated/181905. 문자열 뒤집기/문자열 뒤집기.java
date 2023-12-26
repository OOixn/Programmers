class Solution {
    public String solution(String my_string, int s, int e) {
        StringBuilder answer = new StringBuilder(my_string);
        answer.replace(s, e + 1, new StringBuilder(my_string.substring(s, e + 1)).reverse().toString());
        return answer.toString();
    }
}