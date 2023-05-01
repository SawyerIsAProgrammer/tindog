var buttons = document.getElementsByClassName("Download")

function change_class() {
    for (let i = 0; i < buttons.length; i++) {
        if (window.innerWidth <= 456) {
            buttons[i].classList.remove("btn-lg")
        }
        else {
            buttons[i].classList.add("btn-lg")
        }
    }
}

change_class()
window.onresize = change_class