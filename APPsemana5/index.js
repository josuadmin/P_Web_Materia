const express = require("express");
//iniciando la app
const app = express();

const {Date} = require('./src/services/Date');
const {Usuarios} = require('./src/services/Usuarios');

app.use(express.json());

app.get('/home', (req, res) => {
    try {
        const date3 = new Date(2024,-2,29);
        res.json({
        fecha: date3.Print()}
        );
    } catch (error) {
       res.json({
        m: error.message
       })    
    }
    console.log('sigo ejecutandome');

})

app.get('/user', async (req, res) => {
    const user = new Usuarios();
    const newUser = await user.find();
    res.json({
        res: newUser
    });
    console.log(newUser);
})


//segundo ejemplo.

app.get('/nosotros', function(req, res){
    res.send("Aqui esta nosotros");
})

//escuchando el puerto

app.listen(3000, function(){
    console.log("escuchando el puerto 3000");
});