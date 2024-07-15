function solution(n) {
    const answer = new Array(n + 1).fill(true);
    
    answer[0] = false;
    answer[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (answer[i]) {
            for (let j = i * i; j <= n; j += i) {
                answer[j] = false;
            }
        }
    }
    
    return answer.filter(e => e).length;
}