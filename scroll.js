document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.scroll-container');
    const figures = container.querySelectorAll('.introhead');
    const containerWidth = container.offsetWidth;

    figures.forEach((figure, index) => {
        figure.style.position = 'absolute';
        figure.style.left = `${index * 600}px`; // Расстояние между фигурами, можно настроить
    });

    function scrollFigures() {
        figures.forEach((figure) => {
            let currentLeft = parseInt(figure.style.left, 10);
            if (currentLeft <= -150) { // Если фигура вышла за левую границу контейнера
                figure.style.left = `${containerWidth}px`; // Перемещаем фигуру вправо за пределы контейнера
            } else {
                figure.style.left = `${currentLeft - 1}px`; // Сдвигаем фигуру влево
            }
        });

        requestAnimationFrame(scrollFigures);
    }

    scrollFigures();
});