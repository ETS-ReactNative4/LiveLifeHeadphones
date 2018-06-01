const express = require('express');
const path = require('path');

const app = module.exports = express();

// app.use( express.static(__dirname + '../build'));
// app.use(express.static(__dirname + '/default.htm'));
// app.use(express.static(path.join(__dirname , '/build')));
app.use( express.static(__dirname+'/../build'));



const port = 8080;

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } ); 