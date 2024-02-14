function solution(array) {
    var answer = 0;
    let str = array.toString();
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === '7'){
                answer++;
            }
    }
    return answer;
}