document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartProductsContainer = document.querySelector('.cart__products');

    function updateCartProductQuantity(productId, quantity) {
        const cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);
        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
        } else {
            const productElement = document.querySelector(`.product[data-id="${productId}"]`);
            const productImageSrc = productElement.querySelector('.product__image').src;

            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = productId;

            const cartProductImage = document.createElement('img');
            cartProductImage.className = 'cart__product-image';
            cartProductImage.src = productImageSrc;

            const cartProductCount = document.createElement('div');
            cartProductCount.className = 'cart__product-count';
            cartProductCount.textContent = quantity;

            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);

            cartProductsContainer.appendChild(cartProduct);

            animateProductAddition(productElement, cartProduct);
        }
    }

    function animateProductAddition(productElement, cartProduct) {
        const productImage = productElement.querySelector('.product__image');
        const cartProductImage = cartProduct.querySelector('.cart__product-image');

        const productRect = productImage.getBoundingClientRect();
        const cartRect = cartProductImage.getBoundingClientRect();

        const deltaX = cartRect.left - productRect.left;
        const deltaY = cartRect.top - productRect.top;
        const steps = 20;
        const interval = 10;
        const stepX = deltaX / steps;
        const stepY = deltaY / steps;
        let step = 0;

        const shadow = document.createElement('img');
        shadow.className = 'product-shadow';
        shadow.src = productImage.src;
        shadow.style.position = 'absolute';
        shadow.style.width = `${productImage.offsetWidth}px`;
        shadow.style.height = `${productImage.offsetHeight}px`;
        shadow.style.top = `${productRect.top}px`;
        shadow.style.left = `${productRect.left}px`;
        document.body.appendChild(shadow);

        const animate = () => {
            if (step < steps) {
                shadow.style.top = `${productRect.top + stepY * step}px`;
                shadow.style.left = `${productRect.left + stepX * step}px`;
                step++;
                setTimeout(animate, interval);
            } else {
                document.body.removeChild(shadow);
            }
        };

        animate();
    }

    products.forEach(product => {
        const quantityControls = product.querySelector('.product__quantity-controls');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');

        quantityControls.addEventListener('click', (event) => {
            if (event.target.classList.contains('product__quantity-control_inc')) {
                quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
            } else if (event.target.classList.contains('product__quantity-control_dec')) {
                if (parseInt(quantityValue.textContent) > 1) {
                    quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
                }
            }
        });

        addButton.addEventListener('click', () => {
            const productId = product.dataset.id;
            const quantity = parseInt(quantityValue.textContent);
            updateCartProductQuantity(productId, quantity);
        });
    });
});
