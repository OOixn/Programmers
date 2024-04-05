function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        let count = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0) {
                 count += 1;
            }
        }
        if(2 < count){
            answer += 1;
        }
    }
    return answer;
}