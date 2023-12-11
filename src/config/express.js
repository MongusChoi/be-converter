const express = require('express')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const routes = require("../api/routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({ secret: `secret`, resave: true, saveUninitialized: true }))

app.use("/", routes)

module.exports = app;