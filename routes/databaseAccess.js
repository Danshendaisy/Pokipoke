const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../model/food.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/food', (req, res) => {
  const newFood = new Food({
    id: req.body.id,
    seller: req.body.seller,
    name:req.body.name,
    price:req.body.price,
    quantity:req.body.quantity,
    description:req.body.description,
    placeToMeet:req.body.placeToMeet,
    image:req.body.image
  })
  newFood.save()
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    res.json(error);
  })
});

router.get('/food', (req, res, next) => {
  console.log('food');
  Food.find({}).sort({createdAt: -1}).exec((err, food) =>
  {
    if (err) return next (err);
    res.json(food)
  })

// router.get('/food/:name', (req,res,next)=>{
//   Food.find({name:req.param.name}).exec((err,food)=>{
//     if(err) return next(err);
//     res.json(food)
//   })
//   })
})



  //
  // a.filter( x => {
  //     if (!c.hasOwnProperty(x.a)){
  //         c[x.a] = true;
  //         return true;
  //     }
  //     return false;
  // });




module.exports = router;
