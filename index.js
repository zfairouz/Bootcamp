import express from 'express';
const app = express();

//Pour runner le serveur; 
app.get('/', (req, res) => {
    res.send('Hello!');
    });

//Cree le serveur pour ranner hello world
app.listen(3000, () => {
    console.log('Server is runnig on port http://localhost:3000');
    });

//Pour le fichier: node index.js
//nodemon pour mise a jourer automatiquement les modifications sur le serveur
    