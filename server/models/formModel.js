const mongoose = require('mongoose');

// Define the schema for the form data
const formSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
});

// Create the Form model using the schema
const Form = mongoose.model('Form', formSchema);

module.exports = Form;