const tareas = [];

const nuevatarea = document.getElementById("nuevaTarea");

const lista = document.getElementById("listaTareas");

const formulario = document.getElementById("add-new-task-form");


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputvalido = nuevatarea.value.trim();


    if (inputvalido !== "") {
        const li = document.createElement("li");
        li.textContent = inputvalido;
        lista.appendChild(li);
        nuevatarea.value = "";
        nuevatarea.focus();

    }

})




