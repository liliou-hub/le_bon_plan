const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productPicture: String,
    tagProduct: String,
    // userID: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    //   }



});



const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;