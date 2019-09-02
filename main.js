const menuButton = document.getElementById("toggle-menu")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("navbar");
const sticky = menu.offsetTop;

var scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutCubic',
  // header: ['class="navbar"']
});

const fixMenu = () => {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
window.onscroll = function() {fixMenu()};


menuButton.addEventListener("click", (e) => {
  menuOptions.classList.toggle("open")
})