//Ex8-노드 삽입과 바꾸기
window.addEventListener("load", function(){

    var section = document.querySelector("#section8");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0];

    downButton.onclick = function(){
        let nextNode = currentNode.nextElementSibling;
        
        if(nextNode === null){
            alert("더이상 이동할수 없습니다.");
            return;
        }
      //  tbodyNode.removeChild(nextNode);
      //  tbodyNode.insertBefore(nextNode, currentNode);
      currentNode.insertAdjacentElement("beforebegin", nextNode)
    };

    upButton.onclick = function(){
       let previousNode = currentNode.previousElementSibling;
    //    tbodyNode.removeChild(currentNode);
    //    tbodyNode.insertBefore(currentNode, previousNode);
    currentNode.insertAdjacentElement("afterend", previousNode);
    };

});