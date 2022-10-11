import * as fs from 'fs';

fs.appendFileSync("ak.txt", "now appeding something", ()=>{
    console.log("file wrote successfully !!!");
});


fs.readFileSync("ak.txt", (err, data)=>{
    console.log(data.toString());
})

fs.unlinkSync('ak.txt', (err)=>{
    if(err) throw err;
    console.log("deleted file success fully");
});