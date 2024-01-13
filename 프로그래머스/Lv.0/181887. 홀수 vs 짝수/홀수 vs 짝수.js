function solution(num_list) {
    let a = 0;
    let b = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 === 0){
            a += num_list[i];
            
            } else {
            b +=num_list[i];
            
        }
    }
     if( a > b ){
         return a;
     } else return b;
}

