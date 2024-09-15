function solution(arr1, arr2) {
    const result = [];
    const rows1 = arr1.length;
    const cols1 = arr1[0].length;
    const cols2 = arr2[0].length;

    for (let i = 0; i < rows1; i++) {
        const row = [];
        for (let j = 0; j < cols2; j++) {
            let sum = 0;
            for (let k = 0; k < cols1; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}
