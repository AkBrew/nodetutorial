const express = require('Express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
        res.send("Hello cyclic");
        console.log("please run");});

app.listen(port, ()=>{
    console.log("Server is running");
});
