// This file contains JavaScript code to handle the dark mode toggle functionality and any other interactive features for the profile card.

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, and apply it
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle dark mode on button click
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});