const express = require('express');
const os = require('os');

var app = express();

app.get('/', (req, res) => {
    res.json({
        hello: "world"
    });
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on ${port}...`));
