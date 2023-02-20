const express = require('express');
const routes = require('./routes/index.routes')
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const database = process.env.MONGO_DB_URI;

mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Mongo DB has been connected'))
.catch(err => console.log(err));

const PORT = 4111;

app.listen(PORT, console.log("Server has started at port " + PORT))
console.log(PORT);
app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({
        message: 'Nice'
    })
})

app.use('/api/v1', routes)