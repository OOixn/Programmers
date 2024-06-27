function solution(s) {
    let answer = [];
    let result = [];
    
    [...s].forEach((str) => {
        if(!result.includes(str)){
            answer.push(-1);
        }
        
        if(result.includes(str)){
            answer.push(result.length - result.lastIndexOf(str))
        }
        
        result.push(str)
    })
    return answer;
}