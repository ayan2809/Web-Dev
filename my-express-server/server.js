//jshint esversion:6
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send("<h1>Hello World!<h1>");
});

app.get('/contact', (request, response) => {
  response.send("<h1>This is the Contact page for Ayan<h1>");
});

app.get('/about', (request, response) => {
  response.send("<h3>I am a 3rd year Undergrad at VIT Chennai<h3>");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})