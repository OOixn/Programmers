function solution(arr, divisor) {
    var answer = [];
    arr.map((e) => (
    e % divisor === 0 && answer.push(e)
    ))
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}