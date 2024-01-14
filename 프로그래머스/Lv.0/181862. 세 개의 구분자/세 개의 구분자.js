function solution(myStr) {
    let answer = myStr.split(/[abc]/).filter(str => str !== '');

    return answer.length === 0 ? ["EMPTY"] : answer;
}