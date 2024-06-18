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
