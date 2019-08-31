const menuButton = document.getElementById("toggle-menu")
const menuOptions = document.getElementById("menu-options")
menuButton.addEventListener("click", (e) => {
  menuOptions.classList.toggle("open")
})