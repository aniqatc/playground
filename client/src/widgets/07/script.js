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
}