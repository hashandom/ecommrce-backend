const productModel = require('../../models/productModel');

const searchProduct = async (req, res) => {
    try {
        const query = req.query.q;
        // Fixed RegExp constructor usage
        const regex = new RegExp(query, 'i','g'); // No need for 'g' flag for this use case

        const products = await productModel.find({
            $or: [
                { productName: regex },
                { category: regex }
            ]
        });

        console.log("search product results",products)
        res.json({
            data: products,
            message: "Search Product List",
            error: false,
            success: true
        });
        
    } catch (err) {
        res.status(500).json({
            message: err.message || 'An unexpected error occurred',
            success: false,
            error: true
        });
    }
};

module.exports = searchProduct;
