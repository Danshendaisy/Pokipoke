const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const foodSchema = new Schema({
    Id:{
        type: Number
    },
    Seller:{
        type:String
    },
    Name:{
        type:String
    },
    Price:{
        type:Number
    },
    Quantity:{
        type:Number
    },
    Description:{
        type:String
    },
    PlaceToMeet:{
        type:String
    },
    image:{
        type:String
    }
});

let Food = mongoose.model('Food',foodSchema);
module.exports=Food;