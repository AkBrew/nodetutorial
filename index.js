const express = require('Express');
const app = express();

const port = process.evn.PORT || 3000;

app.get("/", (req,res)=>{
        res.send("Hello cyclic");
        console.log("finally running");});

app.listen(port, ()=>{
    console.log("Server is running");
}
