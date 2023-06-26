const Form = require('../models/formModel');

// Controller function to handle form data submission
const submitForm = async (req, res) => {
    try {
        // Get the form data from the request body
        const { username, email, message, phone, company, team } = req.body;

        // Create a new instance of the Form model
        const formData = new Form({
            username,
            email,
            phone,
            message,
            company,
            team,
        });

        // Save the form data to the database
        const savedForm = await formData.save();

        res.status(201).json({ message: 'Form data saved successfully', data: savedForm });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Error submitting form' });
    }
};

module.exports = {
    submitForm,
};