const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8080;

app.use(bodyParser.json());

// GET request handler
app.get('/template', (req, res) => {
  const template = {
    id: 1,
    sentence: 'This is an $relevance sentence with $quantity alternatives',
    choices: {
      relevance: ['important', 'irrelevant'],
      quantity: ['few', 'some', 'many']
    }
  };
  res.send(template);
});

// POST request handler
app.post('/response', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
