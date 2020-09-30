const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const customers = [
    {id:1, firstName: 'John', lastName: 'Doe'}
  ];

  res.json(customers);
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})