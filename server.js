const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')
const app = express();
// filtered and cleaned Big Mac Index data from csv file
const bigMacIndexJson = require('./src/bigMacIndex.json')

let url = "https://ipvigilante.com/json/";
let settings = { method: "Get" };
let pos = 0;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => { res.send("It's working!") })

app.get('/api/data', (req, res) => {  
  // get client IP
  fetch('https://api.ipify.org?format=json')
  .then(results => results.json())
  .then(json => {
    console.log("IP: " + json.ip)
    // get Country info based on cleint IP
    fetch((url + json.ip + '/country_name'), settings)
    .then(res => res.json())
    .then(json => {
        // get the name of the country from the data
        const country = json.data.country_name
        // search for the big mac data
        const bigMacData = bigMacIndexJson.find(({Country}) => Country === country)
        res.json(bigMacData)
        // keep the index value for the country (to avoid it to appear from random country)
        pos = bigMacIndexJson.map((e) => { 
          return e.Country; 
        }).indexOf(country); 
    })
  })
    .catch(err => res.status(400).json('Unable to get Big Mac index data. Err: ' + err));;
})

app.get('/random', (req, res) => {
  // get random nuber (there are 58 countries in the database)
  let rand = Math.floor(Math.random() * Math.floor(58));
  while (rand === pos) {
    rand = Math.floor(Math.random() * Math.floor(58));
    console.log("rand = " + rand + " pos= " + pos)
  }
  const data = bigMacIndexJson[rand]
  res.json(data)
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})