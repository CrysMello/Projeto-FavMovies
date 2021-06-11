require("dotenv").config()
const mongoose = require("mongoose")


//conectando com o banco de dados
const connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
        .then(console.log("Database conectada com sucesso"))
        .catch(err => console.error)
}
module.exports = { connect}