function solution(numbers) {
    let arr = numbers.sort((a,b) => b-a);
    console.log(arr)
    return arr[0] * arr[1];
}