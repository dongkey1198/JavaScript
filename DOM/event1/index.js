// mouse event: 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function(){
    let section = document.querySelector("#section11");
    let container = section.querySelector(".container");
    let status = section.querySelector(".status");
    let dragging = false;
    let offset = {x:0, y:0};
    let current = null;
    let left = container.offsetLeft;
    let top = container.offsetTop; 

    document.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x=e.offsetX;
            offset.y=e.offsetY;
        }
        
        
    };

    document.onmouseup = function(e){
        dragging=false;
    };
    
    document.onmousemove = function(e){
        if(!dragging) return;

        let x = e.pageX-offset.x - left;
        let y = e.pageY-offset.y - top;

        current.style.left =  x + "px";
        current.style.top =  y + "px";

        status.innerText = "(x,y):("+x+", "+y+")";
    };


});

// mouse event: 여러개 박스
window.addEventListener("load", function(){
    let section = document.querySelector("#section10");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");
    let dragging = false;
    let offset = {x:0, y:0};
    let current = null;

    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x=e.offsetX;
            offset.y=e.offsetY;
        }
        
        
    };

    container.onmouseup = function(e){
        dragging=false;
    };
    
    container.onmousemove = function(e){
        if(!dragging) return;

        current.style.left =  e.pageX-offset.x + "px";
        current.style.top =  e.pageY-offset.y + "px";
    };


});

// mouse event: drag
window.addEventListener("load", function(){
    let section = document.querySelector("#section9");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");
    let dragging = false;
    let offset = {x:0, y:0};
    container.onmousedown = function(e){
        if(e.target === box)
        dragging = true;
        
    };

    container.onmouseup = function(e){
        dragging=false;
    };
    
    container.onmousemove = function(e){
        if(!dragging) return;

        box.style.left =  e.pageX-offset.x + "px";
        box.style.top =  e.pageY-offset.y + "px";
    };

    box.onmousedown = function(e){
        offset.x=e.offsetX;
        offset.y=e.offsetY;
    }
});

window.addEventListener("load", function(){
    let section = document.querySelector("#section8");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");

    container.onclick = function(e){
        console.log("(x,y)" + e.x + ", " + e.y);
        console.log("(client: x,y)" + e.clientX + ", " + e.clientX);
        console.log("(page: x,y)" + e.pageX + ", " + e.pageY);
        console.log("(offset: x,y)" + e.offsetX + ", " + e.offsetY);
        box.style.position = "absolute";
        box.style.left = e.x + "px";
        box.style.top = e.y + "px";
    };
});

//event trigger
window.addEventListener("load", function(){
    let section = document.querySelector("#section7");
    let fileButton = section.querySelector(".file-button");
    let fileTriggerButton = section.querySelector(".file-trigger-button");
    fileTriggerButton.onclick = function(){
        let event = new MouseEvent("click",{
            'view':window,
            'bubbles': true,
            'cancelable':true
        });
        fileButton.dispatchEvent(event)
    };
});

//연습문제 1-선택된 레코드 삭제하기:event bubbling
window.addEventListener("load", function(){
    let section = document.querySelector("#section6");
    let tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function(e){

        e.preventDefault();
        
        let target = e.target;
        if(target.nodeName !== "A"){
            console.log("aaa");
            return;
        }
        if(target.classList.contains("sel-button")){
            
            let tr = target.parentElement;
            for(; tr.nodeName != "TR"; tr = tr.parentElement);
            tr.style.background = "yellow";
            
        } 
        else if(target.classList.contains("edit-button")){
            console.log("edit-button");
        }
        else if(target.classList.contains("del-button")){
            console.log("del-button");
        }
    };
}); 

//이벤트 버블링 뭠추기
window.addEventListener("load", function(){
    let section = document.querySelector("#section5");
    
    let imgList = section.querySelector(".img-list");
    let currentImg = section.querySelector(".current-img");
    let addButton = section.querySelector(".add-button");

    imgList.onclick = function(event){
        if(event.target.nodeName !== "IMG"){
            return;
        }
        currentImg.src = event.target.src;
    };

    addButton.onclick = function(e){
        // 버블링을 막는 메서드
        e.stopPropagation();
        let img = document.createElement("img");
        img.src = "../image/a.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };
});

//연습문제 1-선택된 레코드 삭제하기:event bubbling
window.addEventListener("load", function(){
    let section = document.querySelector("#section4");
    let delButton = section.querySelectorAll(".del-button");
    let tbody = section.querySelector("tbody");

    tbody.onclick = function(e){
        if(e.target.nodeName !== "INPUT"){
            return;
        }
        let tr = e.target.parentElement.parentElement;
        tr.remove();
    };
    
}); 

//버블링을 이용한 이벤트처리
window.addEventListener("load", function(){
    let section = document.querySelector("#section3");
    
    let imgs = section.querySelectorAll(".img");
    let imgList = section.querySelector(".img-list");
    let currentImg = section.querySelector(".current-img");

    imgList.onclick = function(event){
        if(event.target.nodeName !== "IMG"){
            return;
        }
        currentImg.src = event.target.src;
    };


    // for(let i = 0; i<imgs.length; i++){
    //     imgs[i].onclick = function(e){
    //         currentImg.src = e.target.src;
    //     };
    // };
});


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    let section2 = document.querySelector("#section2");
    let delButton = section2.querySelectorAll(".del-button");
    
    for(let i = 0; i < delButton.length; i++){
        delButton[i].onclick = function(e){
           let tr = e.target.parentElement.parentElement;
           tr.remove();
        }
    }
    
}); 


//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    
    let imgs = section.querySelectorAll(".img");
    let currentImg = section.querySelector(".current-img");

    for(let i = 0; i<imgs.length; i++){
        imgs[i].onclick = function(e){
            currentImg.src = e.target.src;
        };
    };
});