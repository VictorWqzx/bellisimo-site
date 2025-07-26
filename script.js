document.addEventListener('DOMContentLoaded', function () {
    // Выбираем все блоки с товарами, за которыми будем наблюдать
    const productItems = document.querySelectorAll('.product-item');

    // Проверяем, есть ли на странице такие блоки
    if (productItems.length > 0) {
        
        // Создаем "наблюдатель"
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Если элемент появился в области видимости
                if (entry.isIntersecting) {
                    // Добавляем ему класс для запуска анимации
                    entry.target.classList.add('is-visible');
                    // Прекращаем наблюдение за этим элементом, чтобы анимация не повторялась
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Анимация начнется, когда видно хотя бы 10% элемента
        });

        // "Просим" наблюдатель следить за каждым блоком товара
        productItems.forEach(item => {
            observer.observe(item);
        });
    }
});