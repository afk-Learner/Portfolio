const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('.icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    icon.textContent = isDarkMode ? '🌙' : '🌞';
    const textColor = isDarkMode ? '#fff' : '#333';
    body.style.color = textColor;
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    let currentIndex = 0;

    links[currentIndex].focus();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % links.length;
            links[currentIndex].focus();
            e.preventDefault();
        } else if (e.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + links.length) % links.length;
            links[currentIndex].focus();
            e.preventDefault();
        } else if (e.key === 'Enter' || e.key === ' ') {
            links[currentIndex].click();
            e.preventDefault();
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            link.focus();
        });
    });
});
