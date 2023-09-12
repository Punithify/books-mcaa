const express = require('express');
const app = express();
const booksJsonFile = require('./books.json');
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());

app.get('/books', (req, res) => res.json(booksJsonFile));

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
