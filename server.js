const express = require('express')
const app = express();
const port = 3000;
const data = require('./models/pokemon.js')

app.use((req, res, next) => {
      console.log('working')
      next()
});

app.use(express.urlencoded({extended:false}))


app.get('/pokemon' , (req,res) => {
      res.render('index.ejs', {
            pokemon: data
      })})

app.get('/pokemon/new', (req,res) => {
      res.render('new.ejs')
});

app.get('/pokemon/edit' , (req,res) => {
      res.render('edit.ejs')
});








app.listen(port , () => {
      console.log('listening')
})