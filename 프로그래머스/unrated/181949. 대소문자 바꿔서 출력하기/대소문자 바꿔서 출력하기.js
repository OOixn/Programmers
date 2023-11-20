const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = "";

rl.on('line', function (line) {
   for(let i=0; i<line.length; i++){
       if(line[i]===line[i].toUpperCase()){
           input+=line[i].toLowerCase()
       }
       else{input+=line[i].toUpperCase()}
   }
    console.log(input)
});