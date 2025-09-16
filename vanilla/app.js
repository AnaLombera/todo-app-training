
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

        toDos.forEach(function (value, index) {
            tareas.push(value)
        })

    }



    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        const inputvalido = nuevatarea.value.trim();
        const apiURL = 'https://68bffd4a0b196b9ce1c2da70.mockapi.io/todos'
        const tarea= {
            title: inputvalido,
            createdAt: new Date().toISOString(),
        }


        if (inputvalido !== "") {


            const response = await fetch (apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify (tarea),
            })

            const tareaApi = await response.json()

            console.log('hdsghds', tareaApi)

            tareas.push (tareaApi);

            nuevatarea.value = "";
            nuevatarea.focus();
            mostrarTareas();

        }


    });

    await hacerLlamada();

    console.log('tareas: ', tareas)

    mostrarTareas();
})











