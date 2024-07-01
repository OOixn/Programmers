function solution(array, commands) {
    let a = [];
    for(let x = 0; x < commands.length; x++){
        const [i, j, k] = commands[x];
        let arr = array.slice(i - 1, j).sort((a, b) => a - b); 
        a.push(arr[k - 1]); 
    }
    return a;
}
