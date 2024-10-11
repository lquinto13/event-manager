const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
//IMPORT ROUTES
const userRoutes = require('./routes/user')
const eventRoutes = require('./routes/event')
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
app.use(cors())

//Middleware
app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)

// app.use('/api/event_registation', eventRegistrationRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`App is running on port ${port}`)
})
