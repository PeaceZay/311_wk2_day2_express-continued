const contacts = require("../data/contacts");

const list = (req, res) => {
    console.log("inside get contacts")
    res.json(contacts)
};

const show =  (req, res) => {
    console.log("inside get contacts by id")
    let id = req.params.id
    let answer = contacts.find(contacts => contacts._id == id)
    if (!answer) {
        res.status(400).json({ msg: "No contact found" })
    }
    res.json(answer)
};

const create = (req, res) => {
    console.log("Posting to contacts")
    let counter = contacts.length + 1;
    let newContact = {
        _id: counter,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    contacts.push(newContact)
    res.json({ msg: `Contact Added`, newContact })

};

module.exports = {
    list,
    show,
    create
}