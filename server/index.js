const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join('/desktop/livelifeheadphones/livelife/build')));

const port = 8080;

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } ); 