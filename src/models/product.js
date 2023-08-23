const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaProduct = new Schema ({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Product', schemaProduct)