const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { v4: uuid } = require('uuid');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.status(200);
    res.send('A simple greeting :)');
});

app.get('/about', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.status(200);
    res.send('For this project, we are setting up a server using Express with Node.js.');
});

app.use((req, res,) => {
    res.set('Content-Type', 'text/plain');
    res.status(404);
    res.send(`Error: 404 Not Found`);
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

