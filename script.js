// Get the input, button, and message elements from the page
let nameInput = document.getElementById("nameInput");
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeMsg = document.getElementById("welcomeMsg");

// Add a click event to the button
welcomeBtn.onclick = function() {
	// Get the user's name from the input field
	let userName = nameInput.value;

	// Check if the user entered a name
	if (userName) {
		// Show a fun personalized message
		welcomeMsg.innerHTML = "Hey " + userName + ", you rock! 🎉";
	} else {
		// Ask the user to enter their name
		welcomeMsg.innerHTML = "Please enter your name above!";
	}
};
