function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
    console.log("run")
}
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleMenu);
});
