const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nguyenhuugiang:gianghuu123@cluster0.twsrtoh.mongodb.net/?retryWrites=true&w=majority');
        console.log("connect successfully!!!");
    } catch (error) {
        console.log("connect failure!!!");
    }
}

module.exports = { connect };
