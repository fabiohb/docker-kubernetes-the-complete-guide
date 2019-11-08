const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        const newVisits = parseInt(visits) + 1;
        client.set('visits', newVisits);
        res.send(`Number of visits is ${newVisits}`);
    });
    res.send('Hi there');
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});