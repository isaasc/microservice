const productRepository = require("../repositories/product-repository");
const ValidationContract = require("../util/validators");

exports.getAllProducts = async (req, res, next) => {
    const allActiveProducts = await productRepository.getAllProducts();

    if (allActiveProducts == null) res.status(204).send();

    res.status(200).send(allActiveProducts);
};

exports.getProductById = async (req, res, next) => {
    const productId = req.params.id;
    const product = productRepository.getProductById(productId);

    if (product) res.status(404).send();

    res.status(200).send(product);
};

exports.createProduct = async (req, res, next) => {
    let validators = new ValidationContract();
    validators.hasMinLength(req.body.name, 6, "The name must be at least 4 characters long.");
    validators.hasMaxLength(req.body.name, 100, "The name cannot exceed 20 characters in length.");

    try {
        if (!validators.isValid()) {
            res.status(400).send({
                errors: validators.getErrors(),
            });
        } else {
            await productRepository.createProduct(req.body);
            res.status(201).send("Product created");
        }
    } catch (error) {
        res.status(500).send({
            message: "Server error.",
        });
    }
};

exports.updateProductById = async (req, res, next) => {
    const productId = req.params.id;
    await productRepository.updateProductById(productId, req.body);
    res.status(200).send("Product updated", req.body);
};

exports.deleteProductById = async (req, res, next) => {
    const productId = req.params.id;
    await productRepository.deleteProductById(productId);
    res.status(200).send("Product deleted", req.body);
};