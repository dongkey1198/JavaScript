function outer(){
    let title = 'conding everybody';
    function inner(){
        console.log(title);
    }
    inner();
}
outer();

function out(){
    let title = "hi guys";
    return function(){
        console.log(title);
    }
}

let inn = out();
inn();
console.log(typeof inn);