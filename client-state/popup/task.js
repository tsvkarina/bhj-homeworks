document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = modal.querySelector('.modal__close');

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const isModalClosed = getCookie('modalClosed');

    if (!isModalClosed) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true', 30);
    });
});
