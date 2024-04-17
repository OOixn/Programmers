function solution(age) {
    let a = ['a','b','c','d','e','f','g','h','i','j'];
    let answer = '';
    age = age.toString();
    
    for (let i = 0; i < age.length; i++) {
        answer += a[age[i]];
    }
    return answer;
}