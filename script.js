document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const dropdownMenu = document.querySelector('.dropdown');
    const navbarLinks = document.querySelector('.links');

    toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.toggle-btn') && !event.target.matches('.fas')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
    dropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            dropdownMenu.classList.remove('show');
        });
    });
});
