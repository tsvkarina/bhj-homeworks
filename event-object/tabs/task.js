document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            const activeTab = document.querySelector('.tab_active');
            const activeContent = document.querySelector('.tab__content_active');
            if (activeTab) activeTab.classList.remove('tab_active');
            if (activeContent) activeContent.classList.remove('tab__content_active');

            tab.classList.add('tab_active');
            const contents = document.querySelectorAll('.tab__content');
            contents[index].classList.add('tab__content_active');
        });
    });
});
