//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function(){

    var section = document.querySelector("#section9");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){
        let inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(let i = 0; i < inputs.length; i++){
            inputs[i].checked = allCheckbox.checked; 
        };
    };

    delButton.onclick = function(){
        let inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].checked){
                inputs[i].parentElement.parentElement.remove();
            }
        }
    };

    swapButton.onclick = function(){
        let inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        
        if(inputs.length != 2){
            alert("두개만 선택하세요!!!");
            return;
        }
        else{
            let node1 = inputs[0].parentElement.parentElement;
            let node2 = inputs[1].parentElement.parentElement;
            let cloneNode = node1.cloneNode(true);
            
            node2.replaceWith(cloneNode);
            node1.replaceWith(node2);
            
        }
    };

});