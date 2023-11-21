// script.js

document.getElementById("enterBtn").addEventListener("click", function() {
    // Get the p tag by its id
    var statusElement = document.getElementById("status");

    // Create a new h1 element
    var newHeading = document.createElement("h1");

    // Set the text content of the new h1 element
    newHeading.textContent = "Entered Metaverse";

    // Replace the existing p tag with the new h1 element
    statusElement.parentNode.replaceChild(newHeading, statusElement);
});
