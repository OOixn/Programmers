function solution(nums) {
    let answer = [];
    let maxLength = Math.floor(nums.length / 2); 
    
    for (let i = 0; i < nums.length; i++) {
        if (!answer.includes(nums[i])) {
            if (answer.length < maxLength) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;
}
