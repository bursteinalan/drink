const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express()
const db = require('./db-manager')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/home.html'));
})

app.post('/interest', async (req, res) => {
	console.log(req.body)
	const { name, email, price, feedback, checkbox } = req.body
	console.log(name)
	const data = req.body
	const dbRes = await db.saveData(email, data)

	res.status(200).json('Interest Received:'+dbRes)

})

app.get('/dump', async (req, res) => {

	const keys = await db.getAll()
	console.log(keys)
	// console.log(values)

	res.status(200).json('Dump Received:'+keys)

})

// app.use(cors())

app.use(cors({
    origin: '*'//['http://localhost']
}))

app.use(express.static(path.join(__dirname, '../web')))

app.listen(process.env.PORT || 8011, () => {
    console.log(`App running on port `,process.env.PORT || 8011)
})