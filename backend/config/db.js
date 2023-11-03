const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect('mongodb+srv://Truong:260102@test.0dxh1rs.mongodb.net/Shop?retryWrites=true&w=majority');
        console.log('connect successfully !!!')
    } catch (error) {
        console.log('connect faill !!!')
    }
}

module.exports = { connect }
