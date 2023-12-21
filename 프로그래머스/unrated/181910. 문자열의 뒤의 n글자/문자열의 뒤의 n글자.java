class Solution {
    public String solution(String my_string, int n) {
        String reverse = new StringBuilder(my_string)
                                .reverse()
                                .substring(0, n);
        String answer = new StringBuilder(reverse)
                                .reverse()
                                .toString();
        return answer;
    }
}