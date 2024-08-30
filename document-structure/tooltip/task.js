document.addEventListener('DOMContentLoaded', () => {
    let currentTooltip = null; 

    function showTooltip(event) {
        event.preventDefault();

        const target = event.currentTarget;
        const title = target.getAttribute('title');

        if (currentTooltip && currentTooltip.textContent === title) {
            currentTooltip.classList.toggle('tooltip_active');
            if (!currentTooltip.classList.contains('tooltip_active')) {
                currentTooltip.remove();
                currentTooltip = null;
            }
            return;
        }

        document.querySelectorAll('.tooltip_active').forEach(tooltip => {
            tooltip.classList.remove('tooltip_active');
            tooltip.remove();
        });

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.textContent = title;

        const { left, top, height } = target.getBoundingClientRect();
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top + height}px`;

        document.body.appendChild(tooltip);

        currentTooltip = tooltip; 
    }

    document.querySelectorAll('.has-tooltip').forEach(elem => {
        elem.addEventListener('click', showTooltip);
    });

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('has-tooltip') && !event.target.classList.contains('tooltip')) {
            document.querySelectorAll('.tooltip_active').forEach(tooltip => {
                tooltip.classList.remove('tooltip_active');
                tooltip.remove();
                currentTooltip = null; 
            });
        }
    });
});
