const products = require("../data/products");

const list = (req, res) => {
    console.log("inside get products")
    res.json(products)
};


const show = (req, res) => {
    console.log("inside get products by id")
    let id = req.params.id
    let answer = products.find(products => products._id == id)
    if (!answer) {
        res.status(400).json({ msg: "No product found" })
    }
    res.json(answer)
};

const create = (req, res) => {
    console.log("Posting to products")
    let counter = products.length + 1;
    let newProducts = {
        _id: counter,
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        imgUrl: req.body.imgUrl,
        catagory: req.body.catagory,
        reviews: req.body.reviews
    }
    contacts.push(newProducts)
    res.json({ msg: `Product Added`, newProducts })

};

module.exports = {
    list,
    show,
    create
}