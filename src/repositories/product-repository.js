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

exports.deleteProduct = async(idProduct) => {
    await Product.findByIdAndUpdate(idProduct, {
        $set: {
            active: false
        }
    });
}

exports.getProductById = async(idProduct) => {
    const productById = await Product.findOne({_id: idProduct},
        "_id name price active"
    );
    return productById;
}

exports.updateProductById = async(idProduct, product) => {
    await Product.findByIdAndUpdate(idProduct, {
        $set: {
            name: product.name,
            price: product.price,
            active: product.active
        }
    });
}