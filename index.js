const express = require('express')
const app = express()
app.use (express.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

//crud em memoria

const lista = ["texto 1", "texto 2"]

app.get("/lista", function (req, res){

  res.send(lista.filter(Boolean))

})

app.get("/lista/:id", function (req, res) {
  const id = req.params.id - 1 
  item = lista[id]
  res.send (item)
})

app.post("/lista", function (req, res) {
  const novoItem = req.body.nome 
  lista.push (novoItem)
res.status(201).send ("Adicionado com sucesso")
})
 
app.put("/lista/:id", function (req, res) {
  const id = req.params.id - 1 
  const itemAtualizado = req.body.nome
  lista[id] = itemAtualizado
  res.send ("Atualizado com sucesso")
})

app.delete("/lista/:id", function (req, res) {
  const id = req.params.id - 1 
  delete lista[id]
  res.send ("Item excluído")
})


app.listen(3000)