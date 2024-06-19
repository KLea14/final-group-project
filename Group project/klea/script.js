// JavaScript Fundamentals
function greetUser(name) {
    return `Hello, ${name}! Welcome to our online dress shop.`;
}

// Digital Clock Project
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Handle form submission
document.getElementById('loginFormModal').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // You can perform validation here if needed

    // Example of displaying a greeting message
    alert(`Hello ${firstName} ${lastName}, you are logged in with email ${email} and phone number ${phone}.`);

    // Optionally, close modal after successful login
    $('#loginModal').modal('hide');
});

// Reaction Game
let start;
document.getElementById('startReactionGame').addEventListener('click', () => {
    const reactionTarget = document.getElementById('reactionTarget');
    reactionTarget.style.display = 'block';
    setTimeout(() => {
        start = Date.now();
        reactionTarget.classList.add('blue');
    }, Math.random() * 2000 + 1000);
});

document.getElementById('reactionTarget').addEventListener('click', () => {
    const end = Date.now();
    alert(`Reaction time: ${end - start}ms`);
    const reactionTarget = document.getElementById('reactionTarget');
    reactionTarget.classList.remove('blue');
    reactionTarget.style.display = 'none';
});

// Slideshow
const images = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400/0000FF',
    'https://via.placeholder.com/600x400/008000',
];
let currentImageIndex = 0;
document.getElementById('prevImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('slideshowImage').src = images[currentImageIndex];
});

document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideshowImage').src = images[currentImageIndex];
});

// Search List
document.getElementById('searchInput').addEventListener('input', () => {
    const filter = document.getElementById('searchInput').value.toUpperCase();
    const items = document.getElementById('searchList').getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
});

// jQuery UI - Sortable and Accordion
$(function () {
    $("#sortable").sortable();
    $("#accordion").accordion();
});