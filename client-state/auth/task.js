document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const signinBtn = document.getElementById('signin__btn');

    function showSignin() {
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active');
    }

    function showWelcome(userId) {
        userIdSpan.textContent = userId;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    }

    const savedUserId = localStorage.getItem('user_id');
    if (savedUserId) {
        showWelcome(savedUserId);
    } else {
        showSignin();
    }

    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(signinForm);

        fetch(signinForm.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id);
                showWelcome(data.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при авторизации.');
        });
    });

    signinBtn.addEventListener('click', () => {
        signinForm.requestSubmit();
    });
});
