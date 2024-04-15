function toggleMyClass() {
    var element = document.getElementById("nav1");
    element.classList.toggle("shownav");
}

document.getElementById("menu").addEventListener("click", toggleMyClass);