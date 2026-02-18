const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const connectToMongo = require('./database');
const all_routes = require('./routes/index');
const { PORT } = require('./config');

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(all_routes);

app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center;">Backend is working...</h1>');
});

connectToMongo();

const port = PORT || 5000;


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

