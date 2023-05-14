const layers = document.querySelectorAll('.parallax');

// Mouse move event listener
window.addEventListener('mousemove', e => {
    let x = (Math.floor((window.innerWidth / 2)) - e.clientX) * -1;
    let y = Math.floor((window.innerHeight / 2)) - e.clientY;
    // console.log(x+', '+y);
    layers.forEach((el) => {
        let speedX = el.dataset.speedx;
        let speedY = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-x * speedX}px)) translateY(calc(-50% + ${y * speedY}px))`;
    })

}); 