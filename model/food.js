const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const foodSchema = new Schema({
    id:{
        type: Number
    },
    seller:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    description:{
        type:String
    },
    placeToMeet:{
        type:String
    },
    image:{
        type:String
    }
});

let Food = mongoose.model('Food',foodSchema);
module.exports=Food;