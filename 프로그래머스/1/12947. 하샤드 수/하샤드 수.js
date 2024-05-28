function solution(x) {
    let num = String(x).split('').reduce((a, b) => Number(a) + Number(b));
    return x % num === 0 ? true : false;
}