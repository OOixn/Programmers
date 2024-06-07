function solution(arr) {
for (let i = 0; i<arr.length; i++) {
        if (arr.length <= 1) {
            return [-1];
        } else {
            arr.splice(arr.indexOf(Math.min(...arr)),1);
            return arr;
        }
    }
}
