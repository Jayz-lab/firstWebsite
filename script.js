///alert ("Hello world!") test after inserting script .js into html

///selecting html element
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
///console.log(emailElment);
///console.log('Hello world')

/// attaching click listeners
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();
	///console.log('clicked button')

/// getting user entered values
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	console.log('Email:', emailValue)
	console.log('Message:', messageValue)

/// javascript validations
	if(emailValue.includes('@')) {
		alert('Thank you for your message'); 
	} else {
		alert('That is not a valid email, please try again!!!');
	}
})

///Youtube tutorial: https://www.youtube.com/watch?v=-4jokJpvFwc&list=PL4GEkVtNYGlJUe7foYmnWN1UgAiMkhlIn&index=5


