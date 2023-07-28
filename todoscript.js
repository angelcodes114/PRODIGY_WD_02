const task = document.getElementById("textbox");
const list = document.getElementById("listbox");

function addtask(){
    if(task.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    task.value = "";
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    },false);
function savedata(){
        localStorage.setItem("Data", list.innerHTML);
        alert("Data saved successfully!");
    }
function showdata(){
        list.innerHTML=localStorage.getItem("Data");
    }
showdata();
function delete_all(){
        list.innerHTML = "";
    }