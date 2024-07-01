const express = require('express')
const budget = express.Router();
const budgetarr = require('../model/budgetModel');

budget.get('/',(req,res)=>{
res.json(budgetarr)
})

budget.get('/:budgetIndex', (req, res)=>{
    const { budgetIndex } = req.params

   if(budgetarr[budgetIndex]){
        res.json(budgetarr[budgetIndex])
   }else{
    res.status(404).json({error: "Budget not found"});
   }

});
module.exports = budget