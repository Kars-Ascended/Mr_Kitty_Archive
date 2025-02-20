const slider = document.getElementById("sizeSlider");
const mediaElements = document.querySelectorAll(".media");

slider.addEventListener("input", () => {
    mediaElements.forEach(element => {
        element.style.width = `${slider.value}px`;
    });
});
