function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    while (days.length > 0) {
        let deployDay = days[0];
        let count = 0;
        
        while (days.length > 0 && days[0] <= deployDay) {
            days.shift();
            count++;
        }
        
        answer.push(count);
    }
    
    return answer;
}
