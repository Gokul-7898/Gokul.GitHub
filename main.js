// main.js

// Create a dark mode toggle button and add it to the top right corner
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '16px';
toggleBtn.style.right = '16px';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.padding = '8px 12px';
toggleBtn.style.borderRadius = '20px';
toggleBtn.style.border = 'none';
toggleBtn.style.background = '#eee';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.fontSize = '18px';

document.body.appendChild(toggleBtn);

// Add dark mode styles
const darkModeStyles = `
    body.dark-mode {
        background: #181818 !important;
        color: #f1f1f1 !important;
    }
    body.dark-mode a { color: #8ab4f8 !important; }
    body.dark-mode button { background: #333 !important; color: #fff !important; }
`;

const styleTag = document.createElement('style');
styleTag.textContent = darkModeStyles;
document.head.appendChild(styleTag);

// Toggle dark mode on button click
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
/**
 * Backend search toggle button
 * Adds a button to toggle the visibility of a backend search input.
 */

// Create search toggle button
const searchToggleBtn = document.createElement('button');
searchToggleBtn.textContent = '🔍';
searchToggleBtn.style.position = 'fixed';
searchToggleBtn.style.top = '16px';
searchToggleBtn.style.right = '60px';
searchToggleBtn.style.zIndex = '1000';
searchToggleBtn.style.padding = '8px 12px';
searchToggleBtn.style.borderRadius = '20px';
searchToggleBtn.style.border = 'none';
searchToggleBtn.style.background = '#eee';
searchToggleBtn.style.cursor = 'pointer';
searchToggleBtn.style.fontSize = '18px';

// Create search input (hidden by default)
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search backend...';
searchInput.style.position = 'fixed';
searchInput.style.top = '16px';
searchInput.style.right = '110px';
searchInput.style.zIndex = '1000';
searchInput.style.padding = '8px 12px';
searchInput.style.borderRadius = '20px';
searchInput.style.border = '1px solid #ccc';
searchInput.style.display = 'none';
searchInput.style.fontSize = '16px';

// Add to DOM
document.body.appendChild(searchToggleBtn);
document.body.appendChild(searchInput);

// Toggle search input visibility
searchToggleBtn.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
        searchInput.focus();
    } else {
        searchInput.style.display = 'none';
    }
});

// Optional: handle search (replace with actual backend call)
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Example: send searchInput.value to backend
        alert('Searching backend for: ' + searchInput.value);
        // Hide input after search
        searchInput.style.display = 'none';
    }
});