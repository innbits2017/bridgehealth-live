require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require('mongoose');
const connectToDatabase = require("./config/dbConfig");



// middle ware
app.use(express.json());
app.use(cors());
app.use(router);

// //routes
// app.get("/", (req, res) => {
//     res.send("Server Start")
// })


// Database connection

// mongoose.connect('mongodb://localhost:27017/userData', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });
// ;
connectToDatabase()

//port
const PORT = process.env.PORT || 3001;

//listen
app.listen(PORT, () => {
    console.log(`Server start at port no :${PORT}`)
})