let process = [
    function(input){return input + 10;},
    function(input){return input * input;},
    function(input){return input / 2;}
];

let input = 1;

for(let i = 0; i < process.length; i++){
    input = process[i](input);
}

console.log(input);