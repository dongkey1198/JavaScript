let numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let sortfunc = function(a,b){
    console.log(a , b);
    console.log(a - b);
    return a-b;
    // if(a > b){
    //     return 1;
    // }else if(a<b){
    //     return -1;
    // }else{
    //     return 0;
    // }
}

numbers.sort(sortfunc);
console.log(numbers);