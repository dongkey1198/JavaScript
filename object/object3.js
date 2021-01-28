// let grade = {
//     //this는 객체를 가르킨다.
//     park:{kor:10, eng:20, math:30},
//     show:function(){
//         for(let name in this.park){
//             console.log(name, this.park[name]);
//         }
//     }
//  };
// console.log(grade.show());

let grade = {
    park:{kor:10, eng:20, math:30},
    kim:{kor:70, eng:80, math:90}
};

for(let person in grade){
    console.log(person+":");
    for(let subject in grade[person]){
        console.log(subject, grade[person][subject]);
    }
}