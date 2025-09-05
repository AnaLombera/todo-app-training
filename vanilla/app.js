const tareas = [];

const nuevatarea = document.getElementById("nuevaTarea");

const botonagregar = document.getElementById("agregarTarea");

const lista = document.getElementById("listaTareas");



botonagregar.addEventListener("click", (event) => {
    const inputvalido = nuevatarea.value.trim();


    if (inputvalido !== "") {
        const li = document.createElement("li");
        li.textContent = inputvalido;
        lista.appendChild(li);
        input.value = "";
        input.focus();

    }

})




