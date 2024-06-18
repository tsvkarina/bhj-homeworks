function startCountdown(seconds) {
    let remainingTime = seconds;

    const countdownInterval = setInterval(() => {
        console.log(remainingTime); // Для отладки, чтобы видеть оставшееся время в консоли
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert("Вы победили в конкурсе!");
        } else {
            remainingTime -= 1;
        }
    }, 1000);
}
