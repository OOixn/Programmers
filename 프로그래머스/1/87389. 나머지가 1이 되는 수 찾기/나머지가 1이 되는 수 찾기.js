function solution(n) {
    var answer = 0;
    
    for(let i = 0; i <= n; i ++){
        n % i === 1 ? answer = i : 0;
        if(answer !== 0){
            return answer;
        }
    }
}