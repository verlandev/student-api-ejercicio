const mongoose = require ('mongoose')

const DB_URL = "mongodb+srv://root:root@cluster0.nn1l6ms.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {

    try {
        mongoose.set("strictQuery", true); 
        const database = await mongoose.connect(DB_URL);
        const {name, host, port} = database.connection;
        console.log(`[SERVER] conectado con éxito a ${name} en host ${host} en puerto ${port}`)
    } catch (error) {
        console.log('[SERVER ERROR] conectando con la base de datos', error)
    }

}

module.exports = {
    connectDB
}