function solution(array) {
    let answer = array.sort((a, b) => a - b);
    let mid_num = Math.floor(array.length / 2);
    return answer[mid_num];
}