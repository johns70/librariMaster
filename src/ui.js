const grid = document.querySelector("#producto-grid");

export const UI = {
    // Recibe el array de los libros y los dibuja en el contenedor id=producto-grid
    renderizarTarjetas(libros) {
        limpiarHTML();

        // Restauramos el heading si antes se había limpiado o cambiado
        const heading = document.querySelector(".productos__heading");
        if (heading) heading.textContent = "Libros Destacados";

        if (libros.length === 0) {
            if (heading) heading.textContent = `No hay libros disponibles`;
            return;
        }

        libros.forEach(libro => {
            const { id_libro, titulo, precio, nombre_autor, imagen } = libro;
            
            const targetLibro = `
                <div class="producto"> 
                    
                    <div class="producto__detalles">
                        <a href="./chatGptExample.html" class="producto__link">
                            <img class="producto__imagen" src="${imagen}" alt="${titulo}" onerror="this.onerror=null; this.setAttribute('src', '../img/81I0-9qHm6L._AC_UF894,1000_QL80_.jpg');">
                        </a>
                        <div class="producto__contenido">
                            <h3 class="producto__nombre">${titulo}</h3>
                            <p class="producto__descripcio">Autor: ${nombre_autor}</p>
                            <p class="producto__descripcio">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum laudantium, explicabo voluptates cumque voluptas doloribus provident
                            </p>
                        </div>
                    </div>

                    <div class="producto__compra">
                        <div class="producto__precios">
                            <p class="producto__precio">$${precio}</p>
                        </div>
                        <button class="producto__boton" data-id="${id_libro}">Agregar al carrito</button>
                    </div>

                </div>`;
                
            grid.insertAdjacentHTML('beforeend', targetLibro);
        });
    }
};

function limpiarHTML() {
    // Corregido: En JavaScript es case-sensitive, debe ser camelCase -> firstChild
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}