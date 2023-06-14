const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://grinzy:grinzy%40123@cluster0.mm41oq3.mongodb.net/mailbridge'; // MongoDB connection URL
const dbName = 'userData'; // Name of your database

// Function to connect to the database
const connectToDatabase = async () => {
    try {
        // Create a new MongoClient
        const client = new MongoClient(url);

        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected successfully to the database');

        // Specify the database you want to use
        const db = client.db(dbName);

        return db;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

module.exports = connectToDatabase;