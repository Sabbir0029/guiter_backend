const mongoose  = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true,
        unique:[true,'change name this name will not be recorded'],
        minLenght:[3, 'minimum of 3 letters'],
        maxLenght :[100, 'maximum of 100 letters']
    },
    image:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:[0, 'number will not be negative']
    }
},{
    timestamps:true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
