function solution(arr, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let [s, e, k] = queries[i];
        let minValue = Number.MAX_SAFE_INTEGER;
        let minFound = false;

        for (let j = s; j <= e; j++) {
            if (arr[j] > k && arr[j] < minValue) {
                minFound = true;
                minValue = arr[j];
            }
        }

        
        result.push(minFound ? minValue : -1);
    }
    return result;
}
