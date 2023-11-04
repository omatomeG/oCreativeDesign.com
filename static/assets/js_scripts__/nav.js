const hamburger = document.querySelector(".hamburger_menu");
const navMenu = document.querySelector(".nav_menu")
let header = document.getElementById("nav_header");
let headerHeight = header.scrollHeight // header.clientHeight;
let headerWidth = header.clientWidth //scrollWidth

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        // Menu is open
        navMenu.style.top = header.clientHeight + "px";
        navMenu.style.width = header.clientWidth + "px";
    } else {
        // Menu is closed, reset its position
        navMenu.style.top = "0";
        navMenu.style.width = "0";
    }

    /*
    navMenu.style.top = headerHeight + "px";
    navMenu.style.width = headerWidth + "px";*/
})


document.querySelectorAll(".nav_link").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

        // Reset the menu's position
        navMenu.style.top = "0";
        navMenu.style.width = "0";
    });
});  
/*
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))*/

// getting the header height

//const navMenu = document.querySelector(".nav_menu")
// let header = document.getElementById("nav_header");
