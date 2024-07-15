document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const contactFormButton = document.getElementById('contact-form-button');
    const contactModal = document.getElementById('contact-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Toggle dark/light mode
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Switch to Light Mode';
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
        }
    });

    // Open contact form modal
    contactFormButton.addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    // Close contact form modal
    closeModalButton.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});
