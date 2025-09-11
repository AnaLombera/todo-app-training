
document.addEventListener('DOMContentLoaded', () => {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    const nuevatarea = document.getElementById("nuevaTarea");

    const lista = document.getElementById("listaTareas");

    const formulario = document.getElementById("add-new-task-form");


    function mostrarTareas() {
        lista.innerHTML = "";
        tareas.forEach((tarea) => {
            let li = document.createElement("li");
            li.textContent = tarea;
            lista.appendChild(li);
        });
    }

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputvalido = nuevatarea.value.trim();


        if (inputvalido !== "") {
            tareas.push(inputvalido); // añadir al array
            localStorage.setItem("tareas", JSON.stringify(tareas));
            nuevatarea.value = "";
            nuevatarea.focus();
            mostrarTareas();

        }


    });

    mostrarTareas();
})











