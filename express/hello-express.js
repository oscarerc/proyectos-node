import express from 'express';

const app= express();


app.get('/', (req, res)=>{
    res.end("<h1> Hola mundo desde Express</h1>");
    console.log(req);
    console.log(res);
});


app.listen(3000, ()=>{
    console.log("iniciando en el puerto 3000");
});

