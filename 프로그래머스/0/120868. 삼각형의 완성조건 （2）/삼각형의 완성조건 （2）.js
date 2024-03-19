function solution(sides) {
    var answer = 0;
    let a = Math.max(...sides);
    let b = Math.min(...sides);
    
    for(let i = a-b+1; i <= a; i++) answer++;
    
    for(let i = a+1; i < a+b; i++) answer++;
    
    return answer;
}