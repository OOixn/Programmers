function solution(num_list, n) {
    let a = num_list.slice(n);
    let b = num_list.slice(0, n);

    console.log("a" + a);
    console.log("b" + b);
let answer = a.concat(b);

return answer;

}