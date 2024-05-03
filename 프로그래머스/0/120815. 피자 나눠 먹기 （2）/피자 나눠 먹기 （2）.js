function solution(n) {
    let a = 6;
    
    while(true) {
        if(a % n === 0){
            break
        }
        a += 6;
    }
    
    return a / 6;
}