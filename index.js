const app = require('./src/app')


require('dotenv').config()
require('./src/db/mongodb')

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`El servidor está corriendo el el puerto: ${port}`)
})