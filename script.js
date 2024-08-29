const input = document.querySelector("#input-box");
const list = document.querySelector("#list-container");

function AddTask(){
    if(input.value === ''){
        alert("Task cannot be empty!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value="";
    saveData();
}

input.addEventListener("keyup", e => {
     if(e.keyCode === 13){
        AddTask();
     }
})

list.addEventListener("click", e => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();