//------------------------------------------------ Modal content
// Get the modal
var modal = document.getElementById('myModal');

// Get the buttons that opens the modal
var buttons = document.getElementsByClassName("myBtn");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function() {
		modal.style.display = "block";
		body.style.overflow = "hidden";
	}
}

// Get the body element
var body = document.getElementById("body");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}