//jshint esversion:6
const express = require('express')
const bodyParser=require('body-parser');
const date=require(__dirname+"/date.js");

const { response } = require('express');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

var item =[]
app.get('/', (request, response) => {

    let day=date.getDate();
    response.render('list',{kindOfDay : day,listItemRender:item})

});

app.post("/", function(req,res){
    item.push(req.body.newItem)
    res.redirect("/")

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})