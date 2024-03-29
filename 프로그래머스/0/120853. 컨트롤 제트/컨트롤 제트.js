function solution(s) {
    let arr = s.split(' ');
    let answer = 0;
    
    arr.forEach((v, i) => {
        if(v === 'Z') {
            answer -= Number(arr[i-1]);
        } else {
            answer += Number(v);
        }
    });
    
    return answer;
}