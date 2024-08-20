document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    function hideLoader() {
        loader.classList.remove('loader_active');
    }

    function createCurrencyItem(code, value) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const codeDiv = document.createElement('div');
        codeDiv.className = 'item__code';
        codeDiv.textContent = code;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'item__value';
        valueDiv.textContent = value;

        const currencyDiv = document.createElement('div');
        currencyDiv.className = 'item__currency';
        currencyDiv.textContent = 'руб.';

        itemDiv.appendChild(codeDiv);
        itemDiv.appendChild(valueDiv);
        itemDiv.appendChild(currencyDiv);

        return itemDiv;
    }

    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            const valutes = data.response.Valute;

            for (const key in valutes) {
                if (valutes.hasOwnProperty(key)) {
                    const valute = valutes[key];
                    const item = createCurrencyItem(valute.CharCode, valute.Value);
                    itemsContainer.appendChild(item);
                }
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        })
        .finally(() => {
            hideLoader();
        });
});
