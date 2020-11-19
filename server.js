const express = require("express");
const app = express();
const hbs = require('hbs');


app.use(express.static(__dirname + '/public/'))

hbs.registerPartials(__dirname+'/views/parciales');

app.set('view engine' , 'hbs');

app.get('/' , (req, res) => {
    res.render('home',{
        anio: new Date().getFullYear(),
        titulo: "Este es un titulo personalizado"
    })
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})