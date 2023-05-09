const express = require ('express');
const axios = require ('axios');
// Axios una libreria que nos permoite manejas peticiones http



const router = express.Router();

// Rutas para obtener todas las peliculas populares

router.get('/', async (req, res) =>{
    try{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params:{
                api_key: '03f4143002b1a6d5dfcbdf571cfbf82a'
            }
        })

        const movies = response.data.results;
        res.json(movies);
    } catch (error){
        console.error('Error ', error);
        res.status(500).json({ error: ' Error al obtener pelicula, 505'})
    }
})

// ruta para obtener una pelicula por ID

router.get('/:id', async (req, res) => {
    const movieId = req.params.id;
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{
            params:{
                api_key: '03f4143002b1a6d5dfcbdf571cfbf82a'
            }
        });
        const movie = response.data;
        res.json(movie);
    } catch(error){
        console.error('Error ', error);
        res.status(500).json({ error: ' Error al obtener pelicula'})
    }
});


module.exports = router;