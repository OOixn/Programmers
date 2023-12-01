function solution(num_list) {
let odd = "";
let even = "";
for (let i = 0; i < num_list.length; i++){
    if(num_list[i] % 2 === 0){
        even += num_list[i].toString();
    } else {
        odd += num_list[i].toString();
    }
}

let oddsum = odd === "" ? 0 : parseInt(odd, 10);
let evensum = even === "" ? 0 : parseInt(even, 10);

return oddsum + evensum;
}