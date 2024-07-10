const checkForItemNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('item_name')){
        next()
    } else {
        res.json({ error: "Transaction must be defined"})
    }
}

const checkForAmountKey = (req,res,next)=>{
    if(req.body.hasOwnProperty('amount')){
        next()
    } else {
        res.json({ error : "Transaction amount required"})
    }
  }
const checkForNumberInAmount = (req,res,next)=>{
    // if value is not NOT a number then it will continue to the next one 
    if(!isNaN(Number(req.body.amount))){
        next()
    } else {
        res.json({error : "Transaction amount must be a numeric value"})
    }
} 
const checkForAddressKey = (req, res, next) => {
    if(req.body.hasOwnProperty('to') || req.body.hasOwnProperty('from') ){
        next()
    } else {
        res.json({ error: "Transaction must have address"})
    }
}
const checkForCategoryKey = (req, res, next) => {
    if(req.body.hasOwnProperty('category')){
        next()
    } else {
        res.json({ error: "Transaction must have category"})
    }
}

const checkForMessage = (req, res, next) => {
    if(req.body.hasOwnProperty('message')){
        next()
    } else {
        res.json({ error: "Transaction must have discription"})
    }
}


module.exports = {checkForItemNameKey, checkForAmountKey, checkForNumberInAmount, checkForAddressKey, checkForCategoryKey, checkForMessage};