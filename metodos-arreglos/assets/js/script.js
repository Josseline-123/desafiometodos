const tareas = [];
let idActual = 1;

const agregarElemento = function (posicion) {
    const nuevoNombre = document.querySelector('#valor').value;

    const objetoTareas = {
        id: Date.now(),
        nombre: nuevoNombre,
        confirmado: false
    }


    if (posicion === 'Inicio')
        tareas.unshift(objetoTareas);
   
    idActual++;
    //Cada vez que yo agrego un elemento, actualizo la pantalla
    renderizarDatos();
}



const eliminarElementoPorId = function (id) {
    const posicion = tareas.findIndex((obj) => {
        if (obj.id === id)
            return true;
        return false;
    });

    tareas.splice(posicion, 1);

    renderizarDatos();
}

const actualizarConfirmacion = function (id) {
    const posicion = invitados.findIndex((obj) => {
        if (id === obj.id) {
            return true;
        }
        return false;
    });

    invitados[posicion].confirmado = !invitados[posicion].confirmado;
}

const renderizarDatos = function () {
    const lista = document.querySelector('#tareas');
    let html = '';
    for (const tarea of tareas) {
        console.log(tarea);

        if (tarea.confirmado) {
            chequeado = 'checked';
        } else {
            chequeado = '';
        }
       
        html += `
        <div class= "contenedor">
       <div class= "estilos">
        <div class="lineaTarea">
            <div class="idTarea">
                <strong>${tarea.id}</strong>
            </div>
    
            <div class="nombreTarea">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="statusTarea">
                <input onclick="actualizarConfirmacion(${tarea.id})" class="check" type="checkbox" ${chequeado}>
            </div>
            <div class="accionTarea">
                <button onclick="eliminarElementoPorId(${tarea.id})" class="btn" >X</button>
            </div>
        </div>
         </div>
         </div>`
    }

    lista.innerHTML = html;
}


//Solo se ejecuta cuando se carga la página
renderizarDatos();