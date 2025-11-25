
function addTask() {
        let taskText = document.getElementById("taskInput").value;
        let priority = document.getElementById("prioritySelect").value;

        if (taskText === "") {
            alert("Write something first!");
            return;
        }
        let div = document.createElement("div");
        div.className = "task-item " + priority;
        div.innerHTML = taskText;

        div.onclick = function () {
            div.classList.toggle("completed");
        };


        let delBtn = document.createElement("button");
        delBtn.innerHTML = "X";
        delBtn.style.marginLeft = "10px";

        delBtn.onclick = function (event) {
            event.stopPropagation(); 
            div.remove();
        };
        div.appendChild(delBtn);
        document.getElementById("taskList").appendChild(div);
        document.getElementById("taskInput").value = "";
    }
    

