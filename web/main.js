var DRINK = {}
const req_path = 'http://localhost:8011'

DRINK.documentReady = () => {
	console.log('Drink is ready!')
}

DRINK.submitInterest = () => {
	console.log("Submitting Interest Form!")
	const name = document.querySelector('#name').value
	const email = document.querySelector('#email').value
	const price = document.querySelector('#price').value
	const feedback = document.querySelector('#feedback').value
	const checkbox = document.querySelector('#check').value

	console.log(email, price, feedback, checkbox)
	const data = {
		'name':name,
		'email':email,
		'price':price,
		'feedback':feedback,
		'checkbox':checkbox
	}

	$.post(
        '/interest',
        data,
        (response) => {
            console.log('Finished')
            console.log(response)
            
        },
        'json'
    )

}

DRINK.updateSlider = (val) => {
	document.querySelector('#price_label').value = "$"+val;
}

DRINK.grabData = () => {
	$.post(
		'/alldata',
		(response) => {
			console.log(response)
		},
		'json'
	)
}

DRINK.grabOrders = () => {
	
}

