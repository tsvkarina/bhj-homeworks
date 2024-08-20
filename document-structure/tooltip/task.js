document.addEventListener('DOMContentLoaded', () => {
    function showTooltip(event) {
        event.preventDefault(); 

        document.querySelectorAll('.tooltip_active').forEach(tooltip => {
            tooltip.classList.remove('tooltip_active');
            tooltip.remove();
        });

        const target = event.currentTarget;
        const title = target.getAttribute('title');

        if (target.nextElementSibling && target.nextElementSibling.classList.contains('tooltip')) {
            target.nextElementSibling.classList.remove('tooltip_active');
            target.nextElementSibling.remove();
            return;
        }

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.textContent = title;

        const { left, top, height } = target.getBoundingClientRect();
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top + height}px`;

        document.body.appendChild(tooltip);
    }

    document.querySelectorAll('.has-tooltip').forEach(elem => {
        elem.addEventListener('click', showTooltip);
    });

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('has-tooltip') && !event.target.classList.contains('tooltip')) {
            document.querySelectorAll('.tooltip_active').forEach(tooltip => {
                tooltip.classList.remove('tooltip_active');
                tooltip.remove();
            });
        }
    });
});
