const menuButton = document.getElementById("toggle-menu")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("navbar");
const sticky = menu.offsetTop;

var scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutCubic',
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

AOS.init();


document.addEventListener('click', function (event) {
	if (!event.target.matches('.link')) return;
  event.preventDefault();
  menuOptions.classList.toggle("open")
}, false);