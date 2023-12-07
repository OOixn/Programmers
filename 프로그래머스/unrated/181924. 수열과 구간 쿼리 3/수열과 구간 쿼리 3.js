function solution(arr, queries) {
    for(let i = 0 ; i < queries.length; i++){
       const [a, b] = queries[i];
        if(a < arr.length && b < arr.length){
        [arr[a], arr[b]] = [arr[b], arr[a]];
        }
    }
    return arr;
}