const productMode = require('../../models/productModel');

const getProductDetails = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productMode.findById(productId);
        res.status(200).json({
            data: product,
            message: "ok",
            success: true,
            error: false
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || "An error occurred",
            success: false,
            error: true
        });
    }
};

module.exports = getProductDetails;
