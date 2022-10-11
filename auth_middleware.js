const { response } = require('express');
const admin = require('./firebase_admin');

function authMiddleWare(req, response, next){
    var authToken = req.headers.authorization;
    // authToken = "Bearer lajsldfjlajdsflkj";
    console.log(`${authToken}`);
    if(authToken == undefined){
        return response.send({message: "No token provided"}).status(401);
    }

    if(authToken !== undefined && authToken.split(" ")[0] !== "Bearer"){
        response.send({message: "invalid token"}).status(401);
    }

    const token = authToken.split(" ")[1];

    admin.auth().verifyIdToken(token).then(()=> next()).catch(()=>response.send({message: "Unauthorized"}));
}

module.exports = authMiddleWare;