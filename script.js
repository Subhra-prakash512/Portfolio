document.addEventListener('DOMContentLoaded', () => {
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    skillProgressBars.forEach((bar) => {
        const targetWidth = bar.dataset.width;

        if (targetWidth) {
            requestAnimationFrame(() => {
                bar.style.width = targetWidth;
            });
        }
    });
});
