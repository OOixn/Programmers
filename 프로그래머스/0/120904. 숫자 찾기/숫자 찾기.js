function solution(num, k) {
    return num.toString().split("").map((e) => Number(e)).indexOf(k) + 1 || -1;
}