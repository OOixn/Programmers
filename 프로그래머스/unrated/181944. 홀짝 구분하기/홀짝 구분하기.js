const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (line) {
    let input = "";
if (line%2 == 0) {input = line+ " is even"; console.log(input);}
    else {input = line+ " is odd"; console.log(input); }
});