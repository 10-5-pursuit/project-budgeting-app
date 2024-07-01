const express = require('express');
const app = express();
const budgetController = require('./controller/budgetController');

app.use(express.json());

app.use('/Budget', budgetController);


app.get('/', (req, res)=>{
    res.send ("Budget Breakdown");
});


module.exports = app;
