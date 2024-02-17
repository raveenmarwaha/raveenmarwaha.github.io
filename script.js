

function promptForName() {
    var userName = prompt("Please enter your name:");
    if (userName !== null && userName !== "") {
        document.getElementById("welcome-message").innerHTML = "Welcome, " + userName + "!";
    } else {
        document.getElementById("welcome-message").innerHTML = "Welcome!";
    }
}


// Function to enlarge the clicked image
function enlargeImage() {
    var image = document.getElementById("profile-image");
    image.style.width = "500px"; // Change this value to your desired enlargement
}
// c. Customized Navigation Menu
function navigateToPage(page) {
    alert("Navigating to " + page);
    // You can implement actual navigation logic here
}

// d. Onmouseover/Onmouseout Event for Nav Items
function changeColorOnHover(element, color) {
    element.style.backgroundColor = color;
}

function resetColorOnOut(element) {
    element.style.backgroundColor = "";
}

