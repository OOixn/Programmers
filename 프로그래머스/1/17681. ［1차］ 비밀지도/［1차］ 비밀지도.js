function solution(n, arr1, arr2) {
    var answer = [];

    const tmp1 = [];
    const tmp2 = [];
    const len = Math.max(...arr1).toString(2).length;

    for(let i = 0; i< arr1.length; i++){
        tmp1.push (arr1[i].toString(2))
        while(tmp1[i].length !== len){
            tmp1[i] = "0"+tmp1[i]
        }
    }

    for(let i = 0; i< arr2.length; i++){
        tmp2.push (arr2[i].toString(2))
        while(tmp2[i].length !== len){
            tmp2[i] = "0"+tmp2[i]
        }
    }

    for(let i = 0 ; i < len; i++){
        let val =""
        for(let j = 0 ; j < len; j++){
            tmp1[i][j] == 0 && tmp2[i][j] ==0 ? val += " " : val += "#" 
        }
        answer.push(val);
        val = "";
    }

    return answer;
}