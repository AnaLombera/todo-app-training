const tareas = ["tarea1", "tarea2", "tarea3"];

for (let i = 0; i < tareas.length; i++) {


    const item = document.createElement('li')
    item.innerText = tareas[i];

    document.getElementById("listaTareas").appendChild(item);

}

