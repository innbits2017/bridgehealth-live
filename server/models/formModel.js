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
    team: {
        type: String,
        required: false,
    },
    company: {
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
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    }
});

// Create the Form model using the schema
const Form = mongoose.model('Form', formSchema);

module.exports = Form;