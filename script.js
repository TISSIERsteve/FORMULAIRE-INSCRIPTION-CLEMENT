let input = document.querySelector(".mdp input");
let afficheMdp = document.querySelector(".mdp i");
let letterMail = document.getElementById("letterMail");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let emailErrors = document.getElementById("span1");
let passwordError = document.getElementById("span2");

let myInput = document.getElementById("psw");
let mail = document.getElementById("mail");

// Fonction pour voir le mot de passe
afficheMdp.onclick = function () {
	if (input.type === "password") {
		input.type = "text";
		afficheMdp.classList.add("active");
	} else {
		input.type = "password";
		afficheMdp.classList.remove("active");
	}
};

// Lorsque l'user clique sur le champ du mot de passe affiche la boite
mail.onfocus = function () {
	document.getElementById("messageMail").style.display = "block";
};

// Lorsque l'user clique en dehors du champs mot de passe masque la boite
mail.onblur = function () {
	document.getElementById("messageMail").style.display = "none";
};

// Validation des nombres
// Lorsque l'user commence à taper quelque chose dans le champs mot de passe
mail.onkeyup = function () {
	// PARTIE MAIL
	// Test regex
	let mailRegex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	if (mail.value.match(mailRegex)) {
		// Si le passe contient un minimun de 8 caractères
		letterMail.classList.remove("invalidMail");
		letterMail.classList.add("validMail");
	} else {
		// Enlever la classe valid et ajouter la classe invalid
		letterMail.classList.remove("validMail");
		letterMail.classList.add("invalidMail");
	}
};

// PARTIE MOT DE PASSE
myInput.onfocus = function () {
	document.getElementById("messagePsw").style.display = "block";
};

// Lorsque l'user clique en dehors du champs mot de passe masque la boite
myInput.onblur = function () {
	document.getElementById("messagePsw").style.display = "none";
};

myInput.onkeyup = function () {
	// Validation des lettres minuscules
	let lowerCaseLetters = /[a-z]/g;

	if (myInput.value.match(lowerCaseLetters)) {
		// Si le passe contient une lettre minuscule
		letter.classList.remove("invalidPsw");
		letter.classList.add("validPsw");
	} else {
		// Enlever la classe valid et ajouter la classe invalid
		letter.classList.remove("validPsw");
		letter.classList.add("invalidPsw");
	}

	// Validation des lettres majuscules
	let upperCaseLetters = /[A-Z]/g;

	if (myInput.value.match(upperCaseLetters)) {
		// Si le passe contient une lettre majuscule
		capital.classList.remove("invalidPsw");
		capital.classList.add("validPsw");
	} else {
		// Enlever la classe valid et ajouter la classe invalid
		capital.classList.remove("validPsw");
		capital.classList.add("invalidPsw");
	}

	// Validation des nombres
	let numbers = /[0-9]/g;

	if (myInput.value.match(numbers)) {
		// Si le passe contient un chiffre
		number.classList.remove("invalidPsw");
		number.classList.add("validPsw");
	} else {
		// Enlever la classe valid et ajouter la classe invalid
		number.classList.remove("validPsw");
		number.classList.add("invalidPsw");
	}

	// Validation de la longeur

	if (myInput.value.length >= 8) {
		// Si le passe contient un minimun de 8 caractères
		length.classList.remove("invalidPsw");
		length.classList.add("validPsw");
	} else {
		// Enlever la classe valid et ajouter la classe invalid
		length.classList.remove("validPsw");
		length.classList.add("invalidPsw");
	}
};

function handleFormulaire() {
	let mailRegex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	let lowerCaseLetters = /[a-z]/g;
	let upperCaseLetters = /[A-Z]/g;
	let numbers = /[0-9]/g;

	if (!mail.value.match(mailRegex)) {
		alert("E-mail non correct");
	} else if (
		!myInput.value.match(lowerCaseLetters) ||
		!myInput.value.match(upperCaseLetters) ||
		!myInput.value.match(numbers) ||
		!myInput.value.length >= 8
	) {
		alert("Mot de passe non correct");
	} else {
		alert("Pas connecter à une API");
	}
}
