function solution(myString, pat) {
    var answer = myString.replaceAll("A", "\uFFFF").replaceAll("B", "A").replaceAll("\uFFFF", "B");
    return answer.includes(pat) ? 1 : 0;
}