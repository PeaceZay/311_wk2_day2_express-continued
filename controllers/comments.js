const comments = require("../data/comments");

const list = (req, res) => {
    console.log("Inside my GET /comments route");
    res.json(comments)
};

const show = (req, res) => {
    console.log("Inside my GET /comments route");
    let id = req.params.id;
    let answer = comments.find(comment => comment._id == id);
    if (!answer) {
        res.status(400).json({ msg: `No comment by the id of: ${id}` })
    }
    res.json(answer)
};

const create = (req, res) => {
    console.log("Posting to comments")
    let counter = comments.length + 1;
    let newComment = {
        _id: counter,
        body: req.body.body,
        postId: 1

    }
    contacts.push(newComment)
    res.json({ msg: `Contact Added`, newComments })

};

module.exports = {
    list,
    show,
    create
};