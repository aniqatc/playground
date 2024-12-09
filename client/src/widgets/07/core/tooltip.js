import repoContext from "./context";

export default function initializeTooltips() {
    const { repoContainer } = repoContext;
    const languageItems = repoContainer.querySelectorAll('.language-item');

    languageItems.forEach(item => {
        const tooltip = item.querySelector('.tooltip');
        item.addEventListener('mousemove', function (event) {
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX - this.getBoundingClientRect().left}px`;
            tooltip.style.top = `${event.clientY - this.getBoundingClientRect().top - tooltip.offsetHeight + 8}px`;
        })
        item.addEventListener('mouseleave', function () {
            tooltip.style.display = "none";
        })
    })
}