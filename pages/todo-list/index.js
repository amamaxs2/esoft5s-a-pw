
let taskList = []

let loginForm = document.getElementById("taskForm");

function getList() {
    if (localStorage.getItem('todoList')) {
        taskList = JSON.parse(localStorage.getItem('todoList'))
        cont = 0

        taskList.forEach((element) =>  {
            cont++
            const p = document.createElement('p')
            p.textContent = `${cont} - ${element}`

            const section = document.querySelector('#lista')
            section.appendChild(p)
        })
    }
} 

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let tarefa = document.getElementById("tarefa");

    if (tarefa.value == "") {
        alert("Faltando tarefa!!!!!")
    } else {
        taskList.push(tarefa.value)
        localStorage.setItem("todoList", JSON.stringify(taskList))
    }
    tarefa.value = "";
});

document.addEventListener('DOMContentLoaded', function () {
    getList()
})
