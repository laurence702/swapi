module.exports = app => {
    const swapi = require("../controllers/swapi.controller.js");

    var router = require("express").Router();
    
    //test swapi endpoint

    //Just fetch movies from remote
    router.get('/get-swapi-data', swapi.fetchMovies);
    
    //fetch and save to db
    router.post('/save-swapi', swapi.saveMovies);
    router.get('/showmovies', swapi.showMovies);

    app.use('/api/swapi', router);
};