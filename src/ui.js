const grid = document.querySelector("#producto-grid")

export const UI = {
    //recive el array de los libros y los dibuja en el contenedor id=producto-grid
    renderizarTarjetas(libros){
        limpiarHTML()

        if(libros.length === 0) {
            grid.textContent = `<p>No hay libros disponibles</p>`
            return
        }

        libros.forEach(libro => {
            const { id_libro,titulo, precio, nombre_autor } = libro

            const targetLibro = `
               <div class="producto"> 
                  <a href="./chatGptExample.html" class="producto__link">
                  <a href="./chatGptExample.html" class="producto__link">
                    <img class="producto__imagen" src="./img/81I0-9qHm6L._AC_UF894,1000_QL80_.jpg" alt="${titulo}">
                  </a>                  </a>
                  <div class="producto__contenido">
                    <h3 class="producto__nombre">${titulo}</h3>
                    <p class="producto__autor">Autor: ${nombre_autor}</p>
                    <p class="producto__descripcio">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum laudantium, explicabo voluptates cumque voluptas doloribus provident</p>
                    <div class="producto__precios">
                        <p class="producto__precio"> $${precio}</p>
                    </div>
                    <button class="producto__boton" data-id="${id_libro}">Agregar al carrito</button>
                  </div>
             </div> `
             grid.insertAdjacentHTML('beforeend', targetLibro)
        });

    }
}

function limpiarHTML(){
    while(grid.firstchild) {
        grid.removeChild(grid.firstchild)
    }
}