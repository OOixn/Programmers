function solution(brown, yellow) {
    const medianYellow = yellow % 2 === 0 ? yellow / 2 : Math.floor(yellow / 2) + 1;

    for (let vert = 1; vert <= medianYellow; vert++) {
        if (yellow % vert === 0) {
            const hori = yellow / vert;
            const temp = (vert + hori) * 2 + 4;
            if (temp === brown) {
                return [hori + 2, vert + 2];
            }
        }
    }
}