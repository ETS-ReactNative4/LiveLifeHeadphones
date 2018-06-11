const express = require('express');
const path = require('path');

const app = module.exports = express();

// app.use( express.static(__dirname + '../build'));
// app.use(express.static(__dirname + '/default.htm'));
// app.use(express.static(path.join(__dirname , '/build')));
app.use( express.static(`${__dirname}/../build`));
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });


const port = 80;

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } ); 