document.addEventListener('DOMContentLoaded', function() {
    
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    
    let clickCount = 0;
    
    const originalSize = 200;
    const reducedSize = 180;
    
    cookie.onclick = function() {
        clickCount++;
        counter.textContent = clickCount;
        
        if (cookie.width === originalSize) {
            cookie.width = reducedSize;
            cookie.height = reducedSize;
        } else {
            cookie.width = originalSize;
            cookie.height = originalSize;
        }
    };
});
