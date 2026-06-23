const grid = document.querySelector("#producto-grid");

export const UI = {
    // 1. Renderizar Tarjetas de Libros
    renderizarTarjetas(libros) {
        limpiarHTML();

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
    },

    // 2. Renderizar Select de Editoriales (Corregido)
    renderizarEditorial(editorial) {
        const selectorEditorial = document.querySelector("#editorial");
        if (!selectorEditorial) return;

        selectorEditorial.innerHTML = `<option value="">Todas las Editoriales</option>`;

        editorial.forEach(edi => {
            const options = `<option value="${edi.id_editorial}">${edi.nombre_editorial}</option>`;
            // CORREGIDO: Ahora usa la variable correcta (selectorEditorial)
            selectorEditorial.insertAdjacentHTML('beforeend', options); 
        }); 
    },

    // 3. Renderizar Select de Autores
    renderizarAutores(autores) {
        const selectorAutor = document.querySelector("#autor"); // Asegúrate de tener id="autor" en tu HTML
        if (!selectorAutor) return;

        selectorAutor.innerHTML = `<option value="">Todos los Autores</option>`;

        autores.forEach(aut => {
            const options = `<option value="${aut.id_autor}">${aut.nombre_autor}</option>`;
            selectorAutor.insertAdjacentHTML('beforeend', options);
        });
    },

    // 4. Renderizar Select de Categorías
    renderizarCategorias(categorias) {
        const selectorCategoria = document.querySelector("#categoria"); // Asegúrate de tener id="categoria" en tu HTML
        if (!selectorCategoria) return;

        selectorCategoria.innerHTML = `<option value="">Todas las Categorías</option>`;

        categorias.forEach(cat => {
            const options = `<option value="${cat.id_categoria}">${cat.nombre_categorias}</option>`;
            selectorCategoria.insertAdjacentHTML('beforeend', options);
        });
    }
};

function limpiarHTML() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}