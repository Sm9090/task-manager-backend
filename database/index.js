const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');


mongoose.set("strictQuery", false);
const connectToMongo = () => {
        mongoose.connect(MONGODB_URI)
            .then(() => {
                console.log('mongo connected');
            })
            .catch((err) => {
                console.error('Failed to connect to MongoDB:', err.message || err);
            });
    mongoose.connection.on("connected", () => {
        console.log("mongo connected");
    });

    mongoose.connection.on("error", (err) => {
        console.log(err, "mongo error");
    });
}


module.exports = connectToMongo