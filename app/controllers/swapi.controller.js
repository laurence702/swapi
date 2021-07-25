const db = require("../models");
const Movie = db.movies;
const axios = require("axios")
const apiResponse = require("../common/apiResponse")


exports.fetchMovies = async (req,res) =>{
  try {
    const responseData = await axios.get('https://swapi.dev/api/films')
    res.status(200).send(responseData.data);
    return responseData.data;
  } catch (error) {
    console.log(error)
  }
}

 exports.saveMovies = async (req,res) =>{
   try {
     payload = await this.fetchMovies(req,res); 
     for(let i=0; i < payload.results.length; i++) {
       const movies = {
         title: payload.results[i].title,
         episode_id: payload.results[i].episode_id,
         opening_crawl: payload.results[i].opening_crawl,
         director: payload.results[i].director,
         release_date: payload.results[i].release_date,
         created_at: payload.results[i].created_at,
         url: payload.results[i].url
       }
       Movie.create(movies)
       .then(() => {
         console.log("Movie " +i + " saved") 
       })
     }
   } catch (error) {
     console.log(error)
   }
}

exports.showMovies = async (req,res) =>{ //shows from db now not from external resource
 try {
   const allMovies =  await Movie.findAll();
      res.json(apiResponse.formatApiResponse(true,"Movies data", allMovies))
 } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving tutorials."
    }).toString(); 
 }
 
}