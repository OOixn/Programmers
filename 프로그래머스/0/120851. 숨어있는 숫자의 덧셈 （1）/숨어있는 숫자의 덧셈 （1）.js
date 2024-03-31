function solution(my_string) {
    var answer = 0;
    let num = my_string.split('');
    for(let i = 0; i < num.length; i++){
        if(Number(num[i])) answer += Number(num[i]);
    }
    return answer;
}