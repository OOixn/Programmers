function solution(arr1, arr2) {
        
    let a1 = arr1.reduce((a, c) => a + c, 0);
    let a2 = arr2.reduce((a, c) => a + c, 0);
    
    if (arr1.length === arr2.length) {
        if (a2 < a1) {
            return 1;
        } else if (a1 < a2) {
            return -1;
        } else {
            return 0;
        }
    }

    return arr1.length > arr2.length ? 1 : -1;
}