var toggle_element = document.getElementById("toggle_menu_btn")
var navigation_element = document.getElementById("nav")


const hamburgerMenu = document.querySelector(".hamburger_menu");


const menu = document.querySelector(".menu");

var onToggleButtonClick = function () {
    navigation_element.classList.toggle("active")
}

toggle_element.addEventListener("click", onToggleButtonClick);


hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

setTimeout(() => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
}, 10000);