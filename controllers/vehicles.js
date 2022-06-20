const vehicles = require("../data/vehicles");

const list = (req, res) =>  (req, res) => {
    console.log("inside get vehicles")
    res.json(vehicles)
};

const show = (req, res) => {
    console.log("inside get vehicles by id")
    let id = req.params.id
    let answer = vehicles.find(vehicles => vehicles._id == id)
    if (!answer) {
        res.status(400).json({ msg: "No vehicle found" })
    }
    res.json(answer)
};

const create = (req, res) =>{
    console.log("Posting to vehicles")
    let counter = vehicles.length + 1;
    let newVehicles = {
        _id: counter,
        imgUrl: req.body.imgUrl,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        price: req.body.price,
        km: req.body.km,
        miles: req.body.miles,
        fuel: req.body.fuel,
        city: req.body.city,
        isNew: req.body.isNew
    }
    contacts.push(newVehicles)
    res.json({ msg: `Vehicle Added`, newVehicles })

};

module.exports = {
    list,
    show,
    create
};