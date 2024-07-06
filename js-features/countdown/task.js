document.addEventListener('DOMContentLoaded', function() {
    
    let timerElement = document.getElementById('timer');
    let remainingTime = parseInt(timerElement.textContent, 10);
    
    function updateTimer() {
        if (remainingTime > 0) {
            remainingTime--;
            timerElement.textContent = remainingTime;
        } else {
            clearInterval(intervalID);
            alert('Вы победили в конкурсе!');
        }
    }
    
    let intervalID = setInterval(updateTimer, 1000);
});
