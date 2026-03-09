export const customSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const startPosition = window.scrollY;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 90;
    const distance = targetPosition - startPosition;

    const duration = 1000;
    let start = null;

    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);

        window.scrollTo(0, startPosition + distance * easeInOutCubic(percent));

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};
