
//modulos anteriores
import { API } from "./api.js";
import { UI } from "./ui.js";

// Espera a que el HTML inicial esté parseado
document.addEventListener('DOMContentLoaded', async () => {
    //1.pedir datos a la API
    const datosLibros = await API.obtenerLibros()

    //2.Pasarle datos a la UI para que renderize
    UI.renderizarTarjetas(datosLibros)

    const gridProductos = document.getElementById('producto-grid');

    // Escuchamos el contenedor padre, que SÍ existe en el HTML desde el inicio
    gridProductos.addEventListener('click', (evento) => {
        
        // Evaluamos si el clic que burbujeó proviene de un botón de agregar
        if (evento.target.classList.contains('producto__boton')) {
            
            // Extraemos el ID del atributo data-id generado por ui.js
            const idLibro = evento.target.getAttribute('data-id');
            
            // Ejecutas la acción necesaria con el ID obtenido
            ejecutarLogicaCarrito(idLibro);
        }
    });
})

function ejecutarLogicaCarrito(id) {
    console.log(`Acción ejecutada para el libro ID: ${id}`);
    // Aquí conectarás con car.js o enviarás la petición al backend
}