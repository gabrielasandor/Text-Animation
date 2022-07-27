window.addEventListener('mousemove', handleMouseMove);

const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedFast = 350 * normalizedPosition;
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
    });
}