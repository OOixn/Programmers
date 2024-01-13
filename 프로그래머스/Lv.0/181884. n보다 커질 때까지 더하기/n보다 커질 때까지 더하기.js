function solution(numbers, n) {
    var answer = 0;
    for(let i = 0; i < numbers.length; i++){
        let temp = answer;
        answer = numbers[i] + temp;
        if(n < answer){
                return answer;
        }
    }
    return answer;
}