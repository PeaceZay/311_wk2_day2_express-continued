const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const products = require("./routes/products");


const port = process.env.PORT || 4001;
app.use(express.static ("./public"))
app.use(bodyParser.json());

app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

// App.get 








// Middleware






// App. get with id








// App.post 

// this is not done yet

// this is not done yet!!!!!

















