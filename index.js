
const express = require('express');
const server = express();
server.use(express.json())

const listaUsuarios = ['Dom' , 'Han Lue', 'Droga, é o Braia']

server.get('/usuario/:indice',(req,res) =>{
    const {indice} = req.params
    return res.json({ vaga: `O ID do usuário é ${listaUsuarios[indice]}`
    })
})

server.get('/usuario',(req,res) =>{
    return res.json(listaUsuarios)
})

server.post('/usuario', (req, res) =>{
    const {nomeUsuario} = req.body;
    listaUsuarios.push(nomeUsuario);
    return res.json(listaUsuarios);
})

server.put('/usuario/:indice', (req, res) =>{
    const{indice} = req.params
    const{nomeUsuario} = req.body;
    listaUsuarios[indice] = nomeUsuario;
    return res.json(listaUsuarios);
})

server.delete('/usuario/:indice', (req, res) =>{
    const{indice} = req.params
    listaUsuarios.splice(indice, 1)
    return res.json(listaUsuarios)
})




const listaVagas = ['v1' , 'v2'];

server.get('/vagas/:indice',(req,res) =>{
    const {indice} = req.params
    return res.json({ vaga: `O ID da vaga é ${listaVagas[indice]}`
    })
})

server.get('/vagas',(req,res) =>{
    return res.json(listaVagas)
})

server.post('/vagas', (req, res) =>{
    const {nomeVaga} = req.body;
    listaVagas.push(nomeVaga);
    return res.json(listaVagas);
})

server.put('/vagas/:indice', (req, res) =>{
    const{indice} = req.params
    const{nomeVaga} = req.body;
    listaVagas[indice] = nomeVaga;
    return res.json(listaVagas);
})

server.delete('/vagas/:indice', (req, res) =>{
    const{indice} = req.params
    listaVagas.splice(indice, 1)
    return res.json(listaVagas)
})



const listaCarros = ['Camaro', 'RX-7']

server.get('/carros/:indiceInput', (req, res) => {
 const { indiceInput } = req.params
 return res.json({ carro: `O ID do carro foi...
${listaCarros[indiceInput]}` })
})


server.get('/carros', (req, res) => {
 return res.json(listaCarros);
})


server.post('/carros', (req, res) => {
 const { nomeCarro } = req.body;
 listaCarros.push(nomeCarro);
 return res.json(listaCarros);
})


server.put('/carros/:indice', (req, res) => {
 const { indice } = req.params;
 const { nomeCarro } = req.body;
 listaCarros[indice]=nomeCarro;
 return res.json(listaCarros);
})


server.delete('/carros/:indice', (req, res) => {
    const { indice } = req.params;
   
    listaCarros.splice(indice,1);
    return res.json(listaCarros);
   })

server.listen(3000);