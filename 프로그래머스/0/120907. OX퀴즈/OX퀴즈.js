function solution(quiz) {
   return quiz.map((a) => {
       const [b, c] = a.split('=');
        return eval(b) === Number(c) ? "O" : "X";
          })
}