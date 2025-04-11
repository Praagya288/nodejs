const express = require("express")
const {urlRoute} = require("./routes/url")
const {connectToMongoDB} = require("./connect")

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(()=>console.log("MongoDB connected"))

app.use('/url', urlRoute)

app.listen(PORT, () => console.log(`Sever started at PORT:${PORT}`))
