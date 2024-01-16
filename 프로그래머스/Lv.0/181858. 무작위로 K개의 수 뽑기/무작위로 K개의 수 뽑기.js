function solution(arr, k) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
         if(!answer.includes(arr[i])){
             answer.push(arr[i]);
             }
         }
    let a = [];
    for(let i = 0; i < k; i++){
        a[i] = answer[i];
        if (a[i] == null){
            a[i] = -1;
        }
    }
    return a;
}