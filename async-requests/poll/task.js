document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    function displayPoll(pollData) {
        pollTitle.textContent = pollData.title;
        pollAnswers.innerHTML = '';

        pollData.answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswers.appendChild(button);
        });
    }

    fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => response.json())
        .then(data => {
            const { title, answers } = data.data;
            displayPoll({ title, answers });
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });
});
