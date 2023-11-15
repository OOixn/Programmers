function solution(n) {
  const sequence = [];

  while (n >= 1) {
    
    sequence.push(n);

    
    if (n === 1) {
      break;
    }

    
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
  }

  return sequence;
}
