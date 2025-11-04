// Fade-in animation
document.body.style.opacity = 0;
let opacity = 0;

const fadeIn = setInterval(() => {
    if (opacity >= 1) clearInterval(fadeIn);
    opacity += 0.02;
    document.body.style.opacity = opacity;
}, 50);
