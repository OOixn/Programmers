function solution(rank, attendance) {

  const obj = rank.reduce((acc, cur, i) => {
    if (attendance[i]) {
      acc[cur] = i;
    }
    return acc;
  }, {});

  const [a, b, c, ...rest] = Object.values(obj);

  return a * 10000 + b * 100 + c;
}
