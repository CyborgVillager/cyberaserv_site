const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./count/count.txt', 'utf-8');
    console.log('count', count)

    const newCount = parseInt(count) + 1
    writeFileSync('./count/count.txt', newCount);

    res.send('<!DOCTYPE html>\n' +
        '<html>\n' +
        '<body>\n' +
        '\n' +
        '<h1>My First Heading</h1>\n' +
        '<p>My first paragraph.</p>\n' +
        '\n' +
        '</body>\n' +
        '</html>');



});

app.listen(5000, () => console.log('http://localhost:5000/'));