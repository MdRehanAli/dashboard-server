const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT
const app = express();

// MiddleWares 
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Dashboard Server is Running ....")
})

app.listen(port, (req, res) => {
    console.log(`Server is running on Port : ${port}`)
})