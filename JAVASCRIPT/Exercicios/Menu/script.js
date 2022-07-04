function menuToggle() {
    let menuArea = document.getElementById("menu-area")
    if (menuArea.style.width == "0px") {
        menuArea.style.width = "200px"
    } else {
        menuArea.style.width = "0px"
    }
}

function menuToggle2() {
    let menuArea = document.getElementById("menu-area")
    if (menuArea.classList.contains("menu-area")) {
        menuArea.classList.remove("menu-area")
    } else {
        menuArea.classList.add("menu-area")
    }
}