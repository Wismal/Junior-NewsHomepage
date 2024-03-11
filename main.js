let buttonCloseMenu = document.getElementById("buttonCloseMenu");
let buttonMenu = document.getElementById("buttonMenu");
let menu = document.querySelector(".links");

buttonMenu.addEventListener("click", () => {
    menu.classList.remove("hidden");
})

buttonCloseMenu.addEventListener("click", () => {
    menu.classList.add("hidden");
})