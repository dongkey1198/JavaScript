window.addEventListener("load", function(){
    let section = document.getElementById("section");
    let input = section.getElementsByTagName("input");
    let txtX = input[0];
    let txtY = input[1];
    let btnAdd = input[2];
    let txtSum = input[3];
    

    btnAdd.onclick = function() {
        let x = parseInt(txtX.value);
        let y = parseInt(txtY.value);
        txtSum.value = x+y;
    };
});