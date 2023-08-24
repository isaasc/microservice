const productRepository = require("../repositories/product-repository");

exports.getAllProducts = async(req, res, next) => {
    const allActiveProducts = await productRepository.getAllProducts();
    res.status(200).send(allActiveProducts);
}

exports.getProductById = async(req, res, next) => {
    const productId = req.params.id;
    const product = productRepository.getProductById(productId);

    if (product) 
        res.status(404).send();
        
    res.status(200).send(product);
}

exports.createProduct = async(req, res, next) => {
    await productRepository.createProduct(req.body);
    res.status(201).send("Product created");
}

exports.updateProductById = async(req, res, next) => {
    const productId = req.params.id;
    await productRepository.updateProductById(productId, req.body);
    res.status(200).send("Product updated", req.body);
}

exports.deleteProductById = async(req, res, next) => {
    const productId = req.params.id;
    await productRepository.deleteProductById(productId);
    res.status(200).send("Product deleted", req.body);
}