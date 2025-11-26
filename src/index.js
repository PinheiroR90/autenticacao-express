const express = require('express');
const session = require('express-session');
const path = require('node:path');
const router = require('./routes');
const PORT = 3000;

const app = express();

// Configure o motor de visualização para EJS
app.set('view engine', 'ejs')
// Especifique o diretório para os templates de EJS
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret:'maktub',
    resave:false,
    saveUninitialized: true,
    cookie:{ secure: false }
}))

app.use(router);

app.listen(PORT, ()=> console.log(`server run in http://localhost:${PORT}`))