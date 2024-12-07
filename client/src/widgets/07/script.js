import { toPng } from 'html-to-image';

export async function initializeScript() {
    const widget = document.querySelector("#widget-07");
    const langItems = widget.querySelectorAll(".language-item");

    langItems.forEach((el) => {
        el.addEventListener('mousemove', function (event) {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX - this.getBoundingClientRect().left}px`;
            tooltip.style.top = `${event.clientY - this.getBoundingClientRect().top - tooltip.offsetHeight + 8}px`;
        })

        el.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.display = "none";
        })
    })

    const lastAnimatedElement = widget.querySelector(".last-animated-el");
    lastAnimatedElement.addEventListener('animationend', () => {
        saveButton.disabled = false;
        saveButton.classList.remove('disabled');
        saveButton.style.animation = "pop 0.3s ease-out forwards";
    });

    const saveButton = widget.querySelector('.btn-save');
    const repoCard = widget.querySelector('.content-body');
    saveButton.addEventListener("click", () => {
        toPng(repoCard, {
            canvasWidth: repoCard.offsetWidth,
            canvasHeight: repoCard.offsetHeight,
            quality: 1,
            pixelRatio: window.devicePixelRatio,
        }).then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "repo-card.png";
            link.href = dataUrl;
            link.click();
        })
    })
}