function solution(order) {
    var answer = 0;
    let str = order.toString().split("");
    
    str.forEach((e)=>{
        if(e === '3' || e === '6' || e === '9'){
            answer++;
        }
    })
    return answer;
}