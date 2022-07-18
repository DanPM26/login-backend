const mongoose = require('mongoose')

const url =  process.env.MONGO_URL

mongoose.connect(url, {},() => {
    console.log('-----------')
    console.log('Conexión exitosa a la base de datos')
    console.log('-----------')
})

module.exports = mongoose
