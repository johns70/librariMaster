const BASE_URL = 'https://backend-librerymaster.onrender.com/libros'
const BASE_URL_AUTOR = 'https://backend-librerymaster.onrender.com/autores'
const BASE_URL_CATEGO = 'https://backend-librerymaster.onrender.com/categorias'
const BASE_URL_EDI = 'https://backend-librerymaster.onrender.com/editoriales'

export const  API = {
    //obtener los datos de los libros del servidor
   async  obtenerLibros (filtros = {}) {
        try {
            const queryParams = new URLSearchParams()

            //si viene algun filtro en el objeto lo agregamos ala url
            if (filtros.autor) queryParams.append('autor', filtros.autor);
            if (filtros.editorial) queryParams.append('editorial', filtros.editorial);
            if (filtros.categoria) queryParams.append('categoria', filtros.categoria);
            if (filtros.limit) queryParams.append('limit', filtros.limit);

            const url = queryParams.toString() ? `${BASE_URL}?${queryParams.toString()}` : BASE_URL

            const res = await fetch(url)
            
            if (!res.ok) {
                throw new Error(`Error en la petición: ${res.status}`);
            }
            return res.json()
        } catch (error) {
           console.error("API Error (obtenerLibros):", error);
           return []
        }
    },


    async obtenerAutores() {
        const res = await fetch(BASE_URL_AUTOR)
        return await res.json()
    },

     async obtenerCategorias() {
        const res = await fetch(BASE_URL_CATEGO)
        return await res.json()
    },
     async obtenerEditoriales() {
        const res = await fetch(BASE_URL_EDI)
        return await res.json()
    },
}


 