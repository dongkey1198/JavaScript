let vscope = 'global';
console.log(vscope);

function fscope(){
    let vscope = 'local';
    console.log(vscope);
}
fscope();