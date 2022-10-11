const express = require('Express');
const app = express();
const routes = require('./routes.js');
// const app = express();
const cors = require("cors");
const authMiddleWare = require('./auth_middleware');
app.use(cors());
const apiRoutes = require('./api_routes');


// app.use('/movie', apiRoutes);

app.get("/books", (request, response) => {
    return response.send({ books });
  });

app.use(apiRoutes);

app.listen(3000);