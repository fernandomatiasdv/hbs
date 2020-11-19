const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine' , 'hbs');

app.get('/' , (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})