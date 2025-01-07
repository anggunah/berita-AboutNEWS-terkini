const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close sidebar when clicking overlay
overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close sidebar when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        burger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});
