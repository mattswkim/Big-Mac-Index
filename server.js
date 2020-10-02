const express = require('express');
const app = express();
const bigMacIndexJson = require('./src/bigMacIndex.json')
const fetch = require('node-fetch');



let url = "https://ipvigilante.com/json/";
let settings = { method: "Get" };

app.get('/', (req, res) => { res.send("It's working!") })

app.get('/api/data', (req, res) => {  
  let ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  console.log("IP:", ip)
  // using google's IP address for testing
  fetch((url + ip + '/country_name'), settings)
    .then(res => res.json())
    .then((json) => {
        // get the name of the country from the data
        const country = json.data.country_name
        console.log(country)
        // search for the big mac data
        const bigMacData = bigMacIndexJson.find(({Country}) => Country === country)
        console.log("bigmac data " + bigMacData)
        res.json(bigMacData)
    })
    .catch(err => res.status(400).json('Unable to get Big Mac index data. Err: '+err));;
})



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})