import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';
import tutorialRoutes from './app/routes/tutorial.routes.js';

const app = express();

// configuracao do Cors
const corsOption = {
    origin: 'http://localhost:8081'
};
app.use(cors(corsOption));

//middeware para json e urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// teste de rota raiz
app.get('/', (req, res) =>{
    res.json({message: 'Bem Vindo!'});

});

//Rotas
app.use('/api/tutorials', tutorialRoutes);

//inicializa o banco de dados e inicia o servidor 
const startServer = async () => {
    try {
        await db.sequelize.sync();
        console.log('Banco de dados sincronizados com sucesso.');
        
        const port = process.env.PORT || 8081;
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}.`);
        });
    } catch (error) {
        console.error('Falha ao sincronizar com o banco de dados:', error.message);
        process.exit(1);
    }
};

startServer();

















































/*const express = require ("express");
const cors = require ("cors");

const app = express ();

var corsOptions = {
    origin: "http://localhost:8080"
};
app.use (cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require ('./models');

db.sequelize,sync()
then (() => {
    console.log('Bnco de dados sincronizado.');

})
.catch ((wee) => {
    console.log('Falha ao sincronizar db: '+ err.message);
});


//rota simples

app.get('/', (req, res) => {
    res.json({ message: 'Bem Vindo !!'});

});

// seta porta, escutando requests

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> {
    console.log(`servidor rodando na porta ${PORT}.`);
})*/