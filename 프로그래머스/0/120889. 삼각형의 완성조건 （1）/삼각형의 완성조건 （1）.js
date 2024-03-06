function solution(sides) {
    
    let max = Math.max(...sides);
    let sum = sides.reduce((a, c) => a + c, 0);
    let result = sum - max;
    
    return max < result ? 1 : 2;
}