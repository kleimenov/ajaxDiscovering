const express = require('express');
const path = require('path')
const app = express();
const port = 8080;
/*
const requestHandler = (req, res) => {
    console.log('In requestHandler');
    res.end(`Request path: ${req.url}\nRequest method: ${req.method}`);
};
*/


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/ajax.html'));
}) 


app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
});

//console.log('Lost connection (after .listen cal)');