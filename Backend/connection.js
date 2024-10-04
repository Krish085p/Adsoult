const {connect, disconnect} = require('mongoose');

const connectToDb = async () => {

    try {
        const x = await connect('mongodb+srv://krishpatel085:krish31620@cluster0.lzsbfto.mongodb.net/Adsoult?retryWrites=true&w=majority&appName=Cluster0')
        console.log(x.connection.host)
    } catch (error) {
        console.log("Error while connecting")
        console.log(error)
    }
}

const disconnectToDb = async () => {

    try {
        await disconnect()
    } catch (error) {
        console.log("Error while disconnecting")
        console.log(error)
    }
}

const conn = {connectToDb, disconnectToDb};
module.exports = conn;