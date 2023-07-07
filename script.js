function toX(x) {
    x.classList.toggle("change");
}

let menuIcon = document.getElementById("menuIcon");

let dropdown = document.getElementById("dropdown");
dropdown.style.display = "none";

menuIcon.addEventListener("click", function handleClick() {
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block"
    }
    else if (dropdown.style.display == "block") {
        dropdown.style.display = "none"
    }
});