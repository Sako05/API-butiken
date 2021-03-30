const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');
const phonenr = document.getElementById('phonenr');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

/**
 * Trims to remove the whitespaces
 * Validating order form
 * Checks if everything is validated and gives a alert
 */

function checkInputs() {
	
	const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const zipcodeValue = zipcode.value.trim();
    const phonenrValue = phonenr.value.trim();

    var firstnameTrue;
    var lastnameTrue;
    var emailTrue;
    var adressTrue;
    var zipcodeTrue;
    var phonenrTrue;
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Förnamn får inte vara blank');
	} else {
		setSuccessFor(firstname);
        firstnameTrue = 1;
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'Efternamn får inte vara blank');
	} else {
		setSuccessFor(lastname);
        lastnameTrue = 1;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'E-post får inte vara blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Inte en giltig E-post');
	} else {
		setSuccessFor(email);
        emailTrue = 1;
	}

    if(addressValue === '') {
		setErrorFor(address, 'Adressen får inte vara blank');
	} else {
		setSuccessFor(address);
        adressTrue = 1;
	}

    if(zipcodeValue === '') {
		setErrorFor(zipcode, 'E-post får inte vara blank');
	} else if (!isZipcode(zipcodeValue)) {
		setErrorFor(zipcode, 'Inte ett giltigt postnummer');
	} else {
		setSuccessFor(zipcode);
        zipcodeTrue = 1;
	}

    if(phonenrValue === '') {
		setErrorFor(phonenr, 'Telefonnummret får inte vara blank');
	} else if (!isPhoneNr(phonenrValue)) {
		setErrorFor(phonenr, 'Inte ett giltigt telefonnummer');
	} else {
		setSuccessFor(phonenr);
        phonenrTrue = 1;
	}

    if (firstnameTrue === 1 && emailTrue === 1 && adressTrue === 1 && zipcodeTrue === 1 && phonenrTrue === 1){
        alert("Tack för din beställning!");
        clean();
        window.location = "./index.html";
    } 

}

/**
 * Clears localStorage
 * Realoads the page
 */
function clean(){
    localStorage.clear();
    window.location.reload();
  }


/**
 * Sets error for input
 */
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

/**
 * Sets succes for input
 */
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
/**
 * Validates email with regex
 */
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/**
 * Validates zipcode with regex
 */
function isZipcode(zipcode) {
	return  /^\d{3}\d{2}$/.test(zipcode);
}

/**
 * Validates phonenr with regex
 */
function isPhoneNr(phonenr) {
	return  /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/.test(phonenr);
}