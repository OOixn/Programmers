function solution(clothes) {
    let category = {};
    let result = 1;

    clothes.forEach(([name, type]) => {
        category[type] = (category[type] || 0) + 1;
    });

    for (let type in category) {
        result *= (category[type] + 1);
    }

    return result - 1;
}