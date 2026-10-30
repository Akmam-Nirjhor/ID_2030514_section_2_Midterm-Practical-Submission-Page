// Home page: show a confirmation message when the demo button is clicked
function bookDemo() {
    var box = document.getElementById("demo-message");
    box.textContent = "Thank you! Your free demo class request has been received. We will contact you soon.";
    box.style.display = "block";
}

// Products page: count how many courses were added
var enrolled = 0;
function enrollCourse() {
    enrolled++;
    document.getElementById("enroll-count").textContent = "Courses selected: " + enrolled;
}

// Contact page: switch between light and dark theme
function toggleTheme() {
    document.body.classList.toggle("dark");
}
