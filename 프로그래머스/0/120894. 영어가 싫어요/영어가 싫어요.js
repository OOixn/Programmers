function solution(numbers) {
    var answer = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < answer.length; i++){
        numbers = numbers.split(answer[i]).join(i)
    }
    return Number(numbers);
}