function solution(message) {
    var answer = 0;
    for(let i = 0; i < message.length; i++){
        answer += 2;
    }
    return answer;
}