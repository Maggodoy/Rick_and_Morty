
const axios = require ('axios'); //importar 

const URL = 'https://rickandmortyapi.com/api/:character/'

const getCharById = (res, req) => {
 const { id } = req.params // la peticion a la api

 axios
    .get(`https://rickandmortyapi.com/api/character/${id}`) //la url con la qmue trabajamos
    .then((response) => {
      const {id, status, name, species, origin, image, gender} = response.data; //lo que necesitamos de la api
      name
        ? res
            .status(200)
            .json({id, status, name, species, origin, image, gender}) //si todo sale bien
        : res.status(404).send("Not Found"); //si sale mal
    })
    .catch((error) => {
      res.status(500).json({message: error.message}); //donde se muestra el error
    });
}

module.exports = getCharById; //exportar
 