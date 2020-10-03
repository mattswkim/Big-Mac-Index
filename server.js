const express = require('express');
const cors = require('cors')
const app = express();

const query = require('./controllers/query')
const random = require('./controllers/random.js')


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => { res.json("It's working!") })

app.get('/query', (req, res) => {query.getBigMacData(req, res);})

app.get('/random', (req, res) => {random.randomCountryGen(req, res);})


const port = 5000;


app.listen(port, () => {
    console.log(`Server started on ${port}`)
})