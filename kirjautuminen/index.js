'use strict';

const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const palvelin = http.createServer(app);

const {
    tarkastaKayttaja
} = require('./kayttajavarasto.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'sivupohjat'));

app.get('/', (req,res)=> res.sendFile(path.join(__dirname, 'kotisivu.html')));
app.post('/kirjaudu', express.urlencoded({ extended: false }), (req, res) => {
   if (!req.body){
       return res.sendStatus(400);
   } 
   else {
        if(tarkastaKayttaja(req.body.kayttajatunnus, req.body.salasana)) {
            res.render('tulos', {
                data: req.body
            });
        } else {
            res.render('virhe', {
                data: req.body
            });
        }
   }
});
palvelin.listen(port, host, ()=> 
console.log(`Palvelin ${host} palvelee portissa ${port}`)
);