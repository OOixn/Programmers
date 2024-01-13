function solution(myString, pat) {    
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    return myString.includes(pat) ? 1 : 0;
    // 대소문자 구분해서 비교함. 
}