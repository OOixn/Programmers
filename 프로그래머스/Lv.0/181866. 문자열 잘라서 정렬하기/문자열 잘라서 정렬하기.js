function solution(myString) {
    var answer = myString.split('x').filter(str => str !== '').sort();
    // 맨 앞에 공백이 왜 오는거지?
    return answer;
}