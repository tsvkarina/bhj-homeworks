document.addEventListener('DOMContentLoaded', () => {
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    const bookElement = document.getElementById('book');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', (event) => {
            event.preventDefault(); 

            fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

            control.classList.add('font-size_active');

            bookElement.classList.remove('book_fs-small', 'book_fs-big');

            const size = control.getAttribute('data-size');
            if (size) {
                bookElement.classList.add(`book_fs-${size}`);
            }
        });
    });
});
