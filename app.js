const express = require("express");
const path = require ("path");
const mainRoutes = require ("./routers/main");

const app = express();

app.use (express.static ("public"));

app.use (mainRoutes);

app.get ('/', (req, res) => {
res.sendFile(path.join (__dirname, '/views/home.html'))
});

app.get ('/about', (req, res) => {
    res.sendFile(path.join (__dirname, '/views/about.html'))
    });



app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
});