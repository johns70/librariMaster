const carrito = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const listarCarito = document.querySelector(".producto__grid")

let cardCarrito = []

cargaListeners()
function cargaListeners() {
    //leer el elemento
    listarCarito.addEventListener("click", leerCarrito)
}




function leerCarrito(e){
    if(e.target.classList.contains("producto__boton")) {
        const cardSeleccionado = e.target.parentElement.parentElement
        agregarCarrito(cardSeleccionado)
    }
}

function agregarCarrito(card) {
    const infoCard = {
        imagen: card.querySelector("img").src,
        title: card.querySelector(".producto__nombre").textContent,
        precio: card.querySelector(".producto__precio").textContent,
        cantidad: 1,
        id: card.querySelector("button.producto__boton").getAttribute("data-id")
    }

    const existe = cardCarrito.find(curso => curso.id === infoCard.id)
    if(existe) {
      existe.cantidad++
    } else {
          cardCarrito.push(infoCard)
    }


    // cardCarrito = [...cardCarrito, infoCard]
    carritoHTML()
    console.log(cardCarrito)
}

function carritoHTML() {
    limpiarHTML()
    cardCarrito.forEach(curso => {
        const row = document.createElement("tr")
        const { imagen, title, precio, cantidad } = curso
        row.innerHTML = `
            <th><img src="${imagen}" ></th>
            <th>${title}</th>
            <th>${precio}</th>
            <th>${cantidad}</th>
        `
        contenedorCarrito.appendChild(row)
    })
}



function limpiarHTML(){
    // contenedorCarrito.innerHTML = ""

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}