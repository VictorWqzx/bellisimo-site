document.addEventListener('DOMContentLoaded', function () {
    
    const productItems = document.querySelectorAll('.product-item');

    
    if (productItems.length > 0) {
        
        // Создаем "наблюдатель"
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                
                if (entry.isIntersecting) {
                    // Добавляем ему класс для запуска анимации
                    entry.target.classList.add('is-visible');
                    // Прекращаем наблюдение за этим элементом, чтобы анимация не повторялась
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 
        });

        // "Просим" наблюдатель следить за каждым блоком товара
        productItems.forEach(item => {
            observer.observe(item);
        });
    }
});