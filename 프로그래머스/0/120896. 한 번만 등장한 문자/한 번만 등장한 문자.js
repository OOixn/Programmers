function solution(s) {
    var answer = [];
    let arr = s.split("");
    arr.forEach((e) => {
        if(s.indexOf(e) === s.lastIndexOf(e)) {
            answer.push(e);
        }
    })
    return answer.sort().join("");
}
