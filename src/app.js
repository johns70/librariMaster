
//modulos anteriores
import { API } from "./api.js";
import { UI } from "./ui.js";

// Espera a que el HTML inicial esté parseado
document.addEventListener('DOMContentLoaded', async () => {
    //1.pedir datos a la API
    const datosLibros = await API.obtenerLibros()

    UI.renderizarTarjetas(datosLibros);

    // 3. Llenar los selectores usando los mismos datos que ya tenemos
    UI.renderizarEditorial(datosLibros);
    UI.renderizarAutores(datosLibros);
    UI.renderizarCategorias(datosLibros);


    const gridProductos = document.querySelector('#producto-grid');

        
    const selectorEditorial = document.querySelector("#editorial")
    const selectorAutor = document.querySelector("#autor")
    const selectorCategoria = document.querySelector("#categoria")


    async function filtrarLibros() {
        const filtros = {
            editorial: selectorEditorial ? selectorEditorial.value : "",
            autor: selectorAutor ? selectorAutor.value : "",
            categoria: selectorCategoria ? selectorCategoria.value : ""
        }

        
            const librosFiltrados = await API.obtenerLibros(filtros)
        
        
            UI.renderizarTarjetas(librosFiltrados)
    }


    if (selectorEditorial) selectorEditorial.addEventListener('change', filtrarLibros);
    if (selectorAutor) selectorAutor.addEventListener('change', filtrarLibros);
    if (selectorCategoria) selectorCategoria.addEventListener('change', filtrarLibros);

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
