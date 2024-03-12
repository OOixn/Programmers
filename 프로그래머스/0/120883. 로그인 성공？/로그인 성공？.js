function solution(id_pw, db) {
    var answer = '';
    db.map((e)=>{
        if(id_pw[0] === e[0] && id_pw[1] === e[1]) {answer = 'login'}
        else if(id_pw[0] === e[0] && id_pw[1] !== e[1]) {answer = 'wrong pw'}
        else if(id_pw[0] !== e[0] && id_pw[1] !== e[1]) {answer = 'fail'}
    })
    return answer;
}