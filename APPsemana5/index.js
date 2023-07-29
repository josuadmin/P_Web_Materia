const express = require("express");
//iniciando la app
const app = express();

app.get('/home', function(req, res){
    const id = req.query.id
    const limit = req.query.limit  
    res.json({
        id,
        limit
    });  
})


//segundo ejemplo.

app.get('/nosotros', function(req, res){
    res.send("Aqui esta nosotros");
})

//escuchando el puerto

app.listen(3000, function(){
    console.log("escuchando el puerto 3000");
});