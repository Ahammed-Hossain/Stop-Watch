// Toggle dark/light mode
const toggleBtn = document.querySelector('.toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode'); // optional, for styling light mode

    // Optional: change toggle text
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light';
    } else {
        toggleBtn.textContent = 'Dark';
    }
});
