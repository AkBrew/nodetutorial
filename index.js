const express = require('Express');
const app = express();

const port = process.evn.PORT || 3000;

app.use((req, res)=>{
    res.send("hellow cyclic");
});

app.listen(port, ()=>{
    console.log("Server is running");
}
