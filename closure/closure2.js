function factory_movie(title){
    return{
        get_title:function(){
            return title;
        },
        set_title:function(_tltle){
            if(typeof _title ==='String'){
            title = _tltle;
            } else{
                console.log("문자열이어야 합니다.");
            }
        }
    }
}

let ghost = factory_movie('Ghost in the shell');
let matrix = factory_movie('Matrix');


console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title(1);
console.log(ghost.get_title());
console.log(matrix.get_title());