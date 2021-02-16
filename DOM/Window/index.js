// function printResult(){
//     let x = parseInt(prompt("x값을 입력하세요"));
//     let y = parseInt(prompt("y값을 입력하세요"));
    
//     alert(x + y);
// }
window.addEventListener("load", function() {
    let btnPrint = document.getElementById("btn-print");

    btnPrint.onclick = () => {
    let x = parseInt(prompt("x값을 입력하세요"));
    let y = parseInt(prompt("y값을 입력하세요"));

    let result = x + y;
    btnPrint.value = result;
    }
});

