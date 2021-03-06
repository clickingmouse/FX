const express = require('express');

const app = express ();

app.get('/api/fx', (req,res) => {
    const fxTestData =
    [
       {
    disclaimer: "https://openexchangerates.org/terms/",
    license: "https://openexchangerates.org/license/",
    timestamp: 1449877801,
    base: "USD",
    rates: {
        AED: 3.672538,
        AFN: 66.809999,
        ALL: 125.716501,
        AMD: 484.902502,
        ANG: 1.788575,
        AOA: 135.295998,
        ARS: 9.750101,
        AUD: 1.390866
           }
        }
    ];
    res.json(fxTestData);
});


const port =5000;

app.listen(port, 'localhost', ()=> console.log(`Server Started on ${port}`));