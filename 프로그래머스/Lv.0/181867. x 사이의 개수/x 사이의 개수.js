function solution(myString) {
    var answer = myString.split('x').map(a => a.length);
    return answer;
}