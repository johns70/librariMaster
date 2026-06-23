const BASE_URL = 'https://backend-librerymaster.onrender.com/libros'

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
}


 