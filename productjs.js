const header = document.querySelector("Head")

window.addEventListener("Scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})