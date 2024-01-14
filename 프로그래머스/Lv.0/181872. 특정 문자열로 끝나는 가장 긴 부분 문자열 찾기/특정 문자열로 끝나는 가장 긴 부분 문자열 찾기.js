function solution(myString, pat) {

    for (let i = myString.length - pat.length; i >= 0; i--) {
        if (myString.substring(i).startsWith(pat)) {           
            return myString.substring(0, i + pat.length);
        }
    }
    return ""; 
}
