const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

const controller = require('./controller');

// Endpoints
app.get('/api/product', controller.getAll);
app.get('/api/product/:id', controller.getOne);
app.post('/api/product', controller.addItem);
app.put('/api/product/:id', controller.updateItem);
app.delete('/api/product/:id', controller.deleteItem);


app.listen(port, function() {
  console.log(`express is running on ${port}`)
})