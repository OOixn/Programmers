function solution(num_list) {
    var result = num_list;
    let a = result[result.length-1];
    let b = result[result.length-2];
    
    if(a > b){
        result.push(a-b);
        return result;
    }else{
        result.push(a*2);
        return result;
    }
}