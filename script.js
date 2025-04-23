const bodyElem = document.querySelector('body');

function snow(){
    setInterval(function () {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = -50;
        const randomSize = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        const newSpan = document.createElement('span');
        newSpan.classList.add('snowflake');
        newSpan.style.display = 'block';
        newSpan.style.width = randomSize + 'px';
        newSpan.style.height = randomSize + 'px';
        newSpan.style.left = x + 'px';
        newSpan.style.top = y + 'px';

        bodyElem.appendChild(newSpan);

        setTimeout(() => {
            newSpan.remove();
        }, 1800);
    }, 80);
}
snow()
document.body.addEventListener('click', (event) => {
    const ball = document.createElement('div');
    ball.className = 'ball';

    // تنظیم موقعیت اولیه (نقطه کلیک)
    const startX = event.clientX - 30; // 30 = نصف عرض توپ
    const startY = event.clientY - 30; // 30 = نصف ارتفاع توپ
    ball.style.left = `${startX}px`;
    ball.style.top = `${startY}px`;

    document.body.appendChild(ball);

    // پارامترهای فیزیک
    let currentY = startY;
    let velocity = 0;
    const gravity = 0.5;
    const damping = 0.7; // ضریب کاهش سرعت پس از برخورد
    const groundY = window.innerHeight - 60; // 60 = ارتفاع توپ

    function animate() {
        velocity += gravity;
        currentY += velocity;

        // برخورد به زمین
        if (currentY > groundY) {
            currentY = groundY;
            velocity = -velocity * damping;

            // توقف وقتی سرعت خیلی کم شد
            if (Math.abs(velocity) < 1) {
                ball.style.top = `${groundY}px`;
                return;
            }
        }

        ball.style.top = `${currentY}px`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
    setTimeout(function (){
        ball.remove()
    },5000)
});
