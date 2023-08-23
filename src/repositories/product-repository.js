const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.getAllProducts = async() => {
    const allActiveProducts = await Product.find({active: true});
    return allActiveProducts;
}

exports.createProduct = async(product) => {
    let createdProduct = Product(product);
    await createdProduct.save();
}

exports.deleteProductById = async(productId) => {
    await Product.findByIdAndUpdate(productId, {
        $set: {
            active: false
        }
    });
}

exports.getProductById = async(productId) => {
    const productById = await Product.findOne({_id: productId},
        "_id name price active"
    );
    return productById;
}

exports.updateProductById = async(productId, product) => {
    await Product.findByIdAndUpdate(productId, {
        $set: {
            name: product.name,
            price: product.price,
            active: product.active
        }
    });
}