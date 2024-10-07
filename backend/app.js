const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

//Import Routes

//Connect Database
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverSelectionTimeoutMS: 60000,
		writeConcern: {
			w: 'majority',
			wtimeout: 5000,
		},
	})
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log(err))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//Middleware
app.use('/api', userRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`App is running on port ${port}`)
})
