

function promptForName() {
    var userName = prompt("Please enter your name:");
    if (userName !== null && userName !== "") {
        document.getElementById("welcome-message").innerHTML = "Welcome, " + userName + "!";
    } else {
        document.getElementById("welcome-message").innerHTML = "Welcome!";
    }
}

function enlargeImage() {
    var image = document.getElementById("profile-image");
    image.style.width = "500px";
}

function navigateToPage(page) {
    alert("Navigating to " + page);
    
}

function changeColorOnHover(element, color) {
    element.style.backgroundColor = color;
}

function resetColorOnOut(element) {
    element.style.backgroundColor = "";
}

//main.js
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }
    function increaseFontSize() {
        var currentSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
        document.body.style.fontSize = (currentSize + 2) + 'px';
    }
    

    function decreaseFontSize() {
        var currentSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
        document.body.style.fontSize = (currentSize - 2) + 'px';

        function changeColorTheme(theme) {
            var body = document.body;
        
            if (theme === 'light') {
                body.style.backgroundColor = '#ffffff'; 
                body.style.color = '#000000'; 
            } else if (theme === 'dark') {
                body.style.backgroundColor = '#333333'; 
                body.style.color = '#ffffff'; 
            }
        }