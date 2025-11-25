function addTask(){
    let inputText = document.getElementById("inputText");
    let enteredText = inputText.value;

    if (enteredText===""){
        return;
    }

    let list = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerText = enteredText;


    li.onclick = function(){
        li.classList.toggle ("completed");
    }

    //creating cross btn
    let crossBtn = document.createElement("span");
    crossBtn.innerText = "❎";
    crossBtn.style.cursor = "pointer";
    crossBtn.style.marginLeft = "10px";

    //delete karne ka code
    crossBtn.onclick=function(event){
        event.stopPropagation();
        li.classList.toggle("completed");
    }


    li.appendChild(crossBtn);

    list.appendChild(li);

    inputText.value ="";
}
