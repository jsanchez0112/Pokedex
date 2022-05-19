const express = require('express')
const app = express();
const port = 3000;
const data = require('./models/pokemon.js')
const smData = [data[0], data[3], data[5], data[10], data[24]]
const methodOverride = require('method-override');
app.use((req, res, next) => {
      console.log('working')
      next()
});

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('method'))

//Index
app.get('/pokemon' , (req,res) => {
      res.render('index.ejs', {
            pokemon: smData
      })})

//Adding a new pokemon
app.get('/pokemon/new', (req,res) => {
      res.render('new.ejs')
});

app.post('/pokemon' , (req,res) => {
smData.push(req.body)
res.redirect('/pokemon')
})

//delete
app.delete('/pokemon/:indexofSmDataArray' , (req,res) => {
      smData.splice(req.params.indexofSmDataArray, 1)
      res.redirect('/pokemon')
})

//Updating a pokemon
app.get('/pokemon/:indexOfSmDataArray/edit' , (req,res) => {
      res.render('edit.ejs', {
            pokemon: smData[req.params.indexOfSmDataArray],
            index: req.params.indexOfSmDataArray,
      })});

      app.put('/pokemon/:indexOfSmData' , (req,res) => {
            smData[req.params.indexOfSmDataArray] = req.body
            res.redirect('/pokemon')
      })


//Showing details
app.get('/pokemon/:indexOfSmData' , (req,res) => {
      res.render('show.ejs', {
      pokemon: smData[req.params.indexOfSmData]
      })});



app.listen(port , () => {
      console.log(smData)
})