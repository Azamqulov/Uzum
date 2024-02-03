const btn = document.querySelector('.to-top');

btn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: `smooth`,
    });
});
window.addEventListener('scroll', () => {
    if (pageYOffset > 100) {
        btn.style.transform = `scale(1)`;
    } else {
        btn.style.transform = `scale(0)`;
    }
});