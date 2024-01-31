function solution(picture, k) {
    var answer = [];
    
    picture.forEach((str) => {
            let a = '';       
            for(let i = 0; i < str.length; i++){
                for(let j = 0; j < k; j++){
                    a += str[i]
        }
            }
        for(let j = 0; j < k; j++){
            answer.push(a);
        }         
                    
            })
    
    return answer;
}