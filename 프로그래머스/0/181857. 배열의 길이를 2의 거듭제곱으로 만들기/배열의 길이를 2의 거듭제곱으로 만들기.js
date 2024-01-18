function solution(arr) {
    let pow = 2;

    if ((arr.length & (arr.length - 1)) === 0) {
        return arr;
    }

    while (pow < arr.length) {
        pow *= 2;
    }
    
    for (let i = arr.length; i < pow; i++) {
        arr.push(0);
    }
    return arr;
}