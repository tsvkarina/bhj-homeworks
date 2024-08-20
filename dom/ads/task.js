function rotateCases(rotator) {
    let activeCase = rotator.querySelector('.rotator__case_active');

    activeCase.classList.remove('rotator__case_active');
    let nextCase = activeCase.nextElementSibling;

    if (!nextCase) {
        nextCase = rotator.firstElementChild;
    }

    nextCase.classList.add('rotator__case_active');
    nextCase.style.color = nextCase.dataset.color; 

    setTimeout(() => rotateCases(rotator), nextCase.dataset.speed);
}

document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        rotateCases(rotator);
    });
});
