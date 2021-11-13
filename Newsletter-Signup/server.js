//jshint esversion : 6
const express = require('express')
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")
const app = express()
const port = 3000
//const client = require("mailchimp-marketing")

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('/', (req, res) => {

  res.sendFile(__dirname + "/signup.html")

})
app.post('/', (req, res) => {
  //console.log(req);
  const firstName = req.body.Fname;
  const lastName = req.body.Lname;
  const email = req.body.Email;
  console.log(firstName, lastName, email);
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }
  var jsonData = JSON.stringify(data)

  const url = "https://{server_area_from_API_Key}.api.mailchimp.com/3.0/lists/{LIST_KEY}"

  const options = {
    method: "POST",
    auth: "ayan2809:{API_KEY}"
  }
  const request = https.request(url, options, function (response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
      // res.send("Successfully Subscribed")
    }
    else {
      res.sendFile(__dirname + "/failure.html")
      // res.send("There was a error signing up! Please try again later!")
    }



    response.on("data", function (data) {
      console.log(JSON.parse(data))
    })
  })

  request.write(jsonData)
  request.end()

})

app.post("/failure", function (req, res) {
  res.redirect("/")
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//API KEY
//login to mailchimp

//Audience ID
//login to mailchimp

