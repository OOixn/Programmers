function solution(num_list) {
    var answer = 0;
    let product = num_list.reduce((product, value) => product * value, 1);
    let sum = Math.pow(num_list.reduce((sum, value) => sum + value, 0), 2);
    
    if(product < sum){
        return answer = 1;
    } else{
        return answer = 0;
    }
    
}