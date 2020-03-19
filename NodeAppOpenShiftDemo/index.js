const express=require('express');
var app=express();

app.route('/pot/:number').get((req,res)=>{
    let number=req.params.number;
    number=parseInt(number);
    if(number)
        res.status(200).send({result:number*number});
    else
        res.status(400).send({message:'Number must be a number.'});
});

app.listen(3000,()=>{
    console.log('Listing');
});