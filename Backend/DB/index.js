const mongoose = require('mongoose')

async function connectMongoDB(URL){
    await mongoose.connect(URL)
}

module.exports={
    connectMongoDB
}