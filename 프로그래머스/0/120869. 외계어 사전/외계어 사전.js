function solution(spell, dic) {
    let a = spell.sort().join('');
    console.log(a);
    
    for(let e of dic){
        let b = e.split('').sort().join('');
        if(a === b) return 1;
    }
    
    return 2;
}