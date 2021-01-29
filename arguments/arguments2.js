function zero(){
    console.log('zero.length: ' + zero.length, 'arguments: ' + arguments.length);
}
zero(); // result zero.length = 0, argumetns.length = 0 becuase did not insert any parameter.

function one(arg1){
    console.log(arg1);
    console.log(one.length, arguments.length);
}
one('val1', 'val2');