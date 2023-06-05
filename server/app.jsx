require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require('mongoose');
const port = 8000;



// middle ware
app.use(express.json());
app.use(cors());
app.use(router);


// app.get("/", (req, res) => {
//     res.send("Server Start")
// })

// Database connection
mongoose.connect('mongodb://localhost:27017/userData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
;


app.listen(port, () => {
    console.log(`Server start at port no :${port}`)
})