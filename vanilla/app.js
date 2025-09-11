
document.addEventListener('DOMContentLoaded', async() => {
    let tareas =  [];

    const nuevatarea = document.getElementById("nuevaTarea");

    const lista = document.getElementById("listaTareas");

    const formulario = document.getElementById("add-new-task-form");


    function mostrarTareas() {
        lista.innerHTML = "";
        tareas.forEach((tarea) => {
            let li = document.createElement("li");
            li.textContent = tarea.title;
            lista.appendChild(li);
        });
    }

    async function hacerLlamada () {
        const apiURL = 'https://68bffd4a0b196b9ce1c2da70.mockapi.io/todos'

        const response =  await fetch(apiURL, {
            headers: {
                'Accept': 'application/json',
            }
        })

        /** @type Array* } **/
        const toDos = await response.json()
        console.log('API response: ', response, toDos)

        toDos.forEach(function (value, index) {
            tareas.push(value)
        })

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

    await hacerLlamada();

    mostrarTareas();
})











