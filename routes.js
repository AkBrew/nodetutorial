const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Homepage');
});

router.get('/about',(req, res)=>{
    res.send('<h1> About Page </h1>');
});

router.get('/:age/:name', (req, res)=>{
    res.send('Name: ' + req.params.name + 'age: ' + req.params.age);
});

router.get('/login', (req, res)=>{
    res.sendFile('/Users/mac/nodeTutorial/projectFirst/View/simple-login-page-in-html/index.html');
});

router.get('*', (req, res)=>{
    res.status = 404;
    res.send("Not found");
});



module.exports = router;
