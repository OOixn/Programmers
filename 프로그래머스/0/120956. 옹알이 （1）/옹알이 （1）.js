function solution(babbling) {
    var answer = 0;
    for(let i = 0; i < babbling.length; i++){
        let word = babbling[i];
        let pattern = /^(?!.*(?:ayaaya|yeye|woowoo|mama))(?:aya|ye|woo|ma)+$/;
        if(pattern.test(word)){
            answer++;
        }
    }
    return answer;
}
