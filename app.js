import express from 'express';
import path from 'path';
import { __dirname } from './utils/pathUtils.js';

const app = express();
const port = 5000;

// Configuración de archivos estáticos (public)
app.use(express.static(path.join(__dirname, '../public')));

// Configuración de vistas (apunta a utils/views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/home',(req,res) =>{
    res.render('index.ejs')
})


app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});