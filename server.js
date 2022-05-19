const express = require('express')
const app = express();
const port = 3000;
const data = require('./models/pokemon.js')
const smData = [data[0], data[3], data[5], data[10], data[24]]
app.use((req, res, next) => {
      console.log('working')
      next()
});

app.use(express.urlencoded({extended:false}))


app.get('/pokemon' , (req,res) => {
      res.render('index.ejs', {
            pokemon: smData
      })})

//Adding a new pokemon
app.get('/pokemon/new', (req,res) => {
      res.render('new.ejs')
});

app.post('/pokemon' , (req,res) => {
console.log(req.body)
data.push(req.body)
res.redirect('/pokemon')
})

app.put('/pokemon/:indexOfSmData' , (req,res) => {
      smData[req.params.indexOfSmDataArray] = req.body
      res.redirect('/pokemon')
})


app.get('/pokemon/:indexOfSmData' , (req,res) => {
      res.render('show.ejs', {
      pokemon: smData[req.params.indexOfSmData]
      })});



app.get('/pokemon/:indexOfSmDataArray/edit' , (req,res) => {
      res.render('edit.ejs', {
            pokemon: smData[req.params.indexOfSmDataArray],
            index: req.params.indexOfSmDataArray,
      })});








app.listen(port , () => {
      console.log(smData)
})