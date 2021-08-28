var DRINK = {}
const req_path = 'http://localhost:8011'

DRINK.documentReady = function(){
	console.log('Drink is ready!')
}

DRINK.submitInterest = function(){
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
        req_path + '/interest',
        data,
        (response) => {
            console.log('Finished')
            console.log(response)
            
        },
        'json'
    ).done((res) => {
	    alert( "second success" );
	    console.log(res)
	  })

}

DRINK.updateSlider = function(val) {
	document.querySelector('#price_label').value = "$"+val;
}