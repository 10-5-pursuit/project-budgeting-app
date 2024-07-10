const express = require('express');
const budget = express.Router();
//our instance of react being created is now called budget
const budgetarr = require('../model/budgetModel');
//importing some middleware
const {checkForItemNameKey, checkForAmountKey, checkForNumberInAmount, checkForAddressKey, checkForCategoryKey, checkForMessage} = require('../validations/budgetvalidations')


//show all budget breakdowns
budget.get('/',(req,res)=>{
res.json(budgetarr)
});
//show 1 by 1
budget.get('/:budgetIndex', (req, res)=>{
    const { budgetIndex } = req.params

   if(budgetarr[budgetIndex]){
        res.status(200).json(budgetarr[budgetIndex])
   }else{
    res.status(404).json({error: "Budget Breakdown  not found"});
   }

});

//post
budget.post('/',checkForItemNameKey, 
                checkForAmountKey,
                checkForNumberInAmount, 
                checkForAddressKey, 
                checkForCategoryKey, 
                checkForMessage,
                (req, res)=>{
                budgetarr.push(req.body);

    res.status(201).json(budgetarr[budgetarr.length - 1])
});

//delete
budget.delete('/:budgetIndex', (req,res)=>{
    const { budgetIndex } = req.params
 if(budgetarr[budgetIndex]){
    const deletedTransaction = budgetarr.splice(budgetIndex,1)
    res.json(deletedTransaction[0])
 }else{
    res.json({error : "Transaction not found"})
 }
});
//update
budget.put('/:budgetIndex',(req,res)=>{
    const {budgetIndex} =req.params
    budgetarr[budgetIndex]= req.body
    res.status(200).json(budgetarr[budgetIndex])

});

module.exports = budget;