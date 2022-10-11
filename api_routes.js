const express = require('express');
const routes = express.Router();

var movies = [
    { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
    { id: 102, name: "Inception", year: 2010, rating: 8.7 },
    { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
    { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 }
];



routes.get('/movie', (req, res) => {
    res.send({ movies }).status(200);
});


routes.get('/movie/:id([0-9]{3,})', function(req, res){
    const currMovie = findMovie(req.params.id);
    res.send(currMovie);
 });


function findMovie(id) {
    for (const i of movies) {
        console.log(i.id);
        if (i.id == id) {            
            return i;
        }
        break;
    }
}

module.exports = routes;