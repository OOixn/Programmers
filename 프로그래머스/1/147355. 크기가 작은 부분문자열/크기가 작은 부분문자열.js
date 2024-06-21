function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){
        let substring = t.substring(i, i + p.length);
        if(substring <= p) {
            answer ++;
        }
    }
    
    return answer;
}