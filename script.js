// Grab the button and the message area from the HTML
const button = document.getElementById("testButton");
const message = document.getElementById("message");

// Listen for a click on the button
button.addEventListener("click", () => {
    message.textContent = "JavaScript is connected and working! 🚀";
    message.style.color = "#4CAF50"; 
});