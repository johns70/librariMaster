const BASE_URL = 'https://backend-librerymaster.onrender.com/libros'

export const  API = {
    //obtener los datos de los libros del servidor
   async  obtenerLibros () {
        try {
            const respuesta = await fetch(BASE_URL)
            if (!respuesta.ok) throw new Error('Error en la red');
            return await respuesta.json()
            const data = await respuesta.json()
        } catch (error) {
           console.error("API Error (obtenerLibros):", error);
           return []
        }
    }
}


 