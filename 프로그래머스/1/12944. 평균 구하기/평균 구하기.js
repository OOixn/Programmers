function solution(arr) {
    var answer = arr.reduce((a, c) => a + c, 0);
    return answer / arr.length;
}