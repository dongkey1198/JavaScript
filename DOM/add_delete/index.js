window.addEventListener("load", function(){
    let section = document.querySelector('#section');

    let titleInput = section.querySelector(".title-input");
    let menuListUl = section.querySelector(".menu-list");
    let addButton = section.querySelector(".add-button");
    let deleteButton = section.querySelector(".delete-button");

    addButton.onclick = function(){
        let title = titleInput.value;
        let aTag = `<a href="#">${title}</a>`;
        let li = document.createElement('li');
        li.innerHTML = aTag;
        menuListUl.appendChild(li);
        
        // let textNode = document.createTextNode(title);
        // let aNode = document.createElement("a");
        // aNode.href ="###";
        // aNode.appendChild(textNode);

        // let liNode = document.createElement("li");
        // liNode.appendChild(aNode);

        // menuListUl.appendChild(liNode);
        
    };

    deleteButton.onclick= function(){
        // let textNode = menuListDiv.childNodes[0];
        let liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);
        liNode.remove();
    };

});