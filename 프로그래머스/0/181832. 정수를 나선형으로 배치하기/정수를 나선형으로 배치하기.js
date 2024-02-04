function solution(n) {
    // n x n 크기의 배열을 0으로 초기화합니다.
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let x = 0, y = 0; // 시작 위치
    let number = 1; // 배열에 채워질 숫자
    let direction = 0; // 0: 오른쪽, 1: 아래, 2: 왼쪽, 3: 위
    const dx = [0, 1, 0, -1]; // x 방향 이동 (오른쪽, 아래, 왼쪽, 위)
    const dy = [1, 0, -1, 0]; // y 방향 이동 (오른쪽, 아래, 왼쪽, 위)

    for (let i = n * n; i > 0; i--) {
        result[x][y] = number++; // 현재 위치에 숫자를 채웁니다.
        // 다음 위치 계산
        let nextX = x + dx[direction];
        let nextY = y + dy[direction];
        // 배열 범위를 벗어나거나 이미 숫자가 채워진 경우 방향 전환
        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || result[nextX][nextY] !== 0) {
            direction = (direction + 1) % 4; // 방향 전환
            nextX = x + dx[direction];
            nextY = y + dy[direction];
        }
        x = nextX;
        y = nextY;
    }

    return result;
}