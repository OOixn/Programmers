function solution(s) {
    var answer = '';
    let arr = [];
    let str = s.split(' ');
    
    str.forEach((e) => {
        for(let i = 0; i < e.length; i++){
           answer += i % 2 == 0 ? e[i].toUpperCase() : e[i].toLowerCase()
        }
        arr.push(answer);
        answer = '';
    })
    
    
    return arr.join(' ');
}