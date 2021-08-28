const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/home.html'));
})

app.post('/interest', (req, res) => {
	console.log(req.body)
	const { name, email, price, feedback, checkbox } = req.body
	console.log(name)
	res.status(200).send('Interest Received.')

})

// app.use(cors())

app.use(cors({
    origin: ['http://localhost']
}))

app.use(express.static(path.join(__dirname, '../web')))

app.listen(8011, () => {
    console.log(`App running on port 8011.`)
})