let arr = [];
for(let i = 0; i < 5; i++){
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}

for(let index in arr){
    console.log(arr[index]());
}