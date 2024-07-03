const express = require('express');
const app = express();
const budgetController = require('./controller/budgetController');
const cors = require('cors');
const budget = require('./controller/budgetController');
require('dotenv').config();

app.use(express.json());
app.use(cors());

//routes
app.use('/Budget', budgetController);

app.get('/', (req, res)=>{
    res.send ({budget});
});




module.exports = app;
