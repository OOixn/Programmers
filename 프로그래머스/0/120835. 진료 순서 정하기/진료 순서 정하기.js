function solution(emergency) {
    let arr = emergency.map((v) => v).sort((a, b) => b - a);
    return emergency.map((v) => arr.indexOf(v) + 1);
}