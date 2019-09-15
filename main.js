const menuButton = document.getElementById("toggle-menu")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("navbar");
const sticky = menu.offsetTop;
const containerVector = document.getElementsByClassName('parallax');
new simpleParallax(containerVector, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

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

AOS.init();


document.addEventListener('click', function (event) {
	if (!event.target.matches('.link')) return;
  event.preventDefault();
  menuOptions.classList.toggle("open")
}, false);