const express = require("express")
const app = express()
const PORT = 3333

//conectando database

const db = require("./src/data/database")
db.connect()





app.use(express.json())

app.listen(PORT, ()=> console.log("Servidor bombando!"))