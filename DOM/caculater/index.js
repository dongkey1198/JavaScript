window.addEventListener("load", function(){

    // 테그들의 id값으로 객체 파악하기
    let txtX = document.getElementById("txt-x");
    let txtY = document.getElementById("txt-y");
    let btnAdd = document.getElementById("btn-add");
    let txtSum = document.getElementById("text-sum");
    

    btnAdd.onclick = function() {
        let x = parseInt(txtX.value);
        let y = parseInt(txtY.value);
        txtSum.value = x+y;
    };
    // 테그 이름으로 객체 파악하기
    let section = document.getElementById("section2");
    let input = section.getElementsByTagName("input");
    let txtX2 = input[0];
    let txtY2 = input[1];
    let btnAdd2 = input[2];
    let txtSum2 = input[3];
        
    
    btnAdd2.onclick = function() {
        let x = parseInt(txtX2.value);
        let y = parseInt(txtY2.value);
        txtSum2.value = x+y;
    };

    // class이름으로 객체 파악하기
    let section3 = document.getElementById("section3");
    let txtX3 = section3.getElementsByClassName("x")[0];
    let txtY3 = section3.getElementsByClassName("y")[0];
    let btnAdd3 = section3.getElementsByClassName("add")[0];
    let txtSum3 = section3.getElementsByClassName("result")[0];

    btnAdd3.onclick = function(){
        let x = parseInt(txtX3.value);
        let y = parseInt(txtY3.value);
        txtSum3.value = x+y;
    };

    
    // Selector API 사용하기
    let section4 = document.getElementById("section4");
    let txtX4 = section4.querySelector(".x");
    let txtY4 = section4.querySelector(".y");
    let btnAdd4 = section4.querySelector(".add");
    let txtSum4 = section4.querySelector(".result");

    btnAdd4.onclick = function(){
        let x = parseInt(txtX4.value);
        let y = parseInt(txtY4.value);
        txtSum4.value = x+y;
    };

        // childe node 사용하기
        let section5 = document.querySelector("#section5");
        let box = section5.querySelector(".box");
        let input1 = box.children[0];
        let input2 = box.children[1];

        input1.value = "hello";
        input2.value = "ok";

    //엘리먼트 노드의 속성 변경
    let section6 = document.querySelector("#section6");
    // let srcInput = section6.querySelector('.src-input');
    let imageSelect = section6.querySelector('.image-select');
    let chnageButton = section6.querySelector('.change-button');
    let img = section6.querySelector('.image');
    let colorInput = section6.querySelector('.color-input');
    chnageButton.onclick = function(){
        // img.src = "image/"+srcInput.value;
        img.src = "image/"+imageSelect.value;
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
    };


});


