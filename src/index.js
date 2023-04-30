/* Toggle between dark and light mode*/

const btn = document.getElementById("btn");
const btnText = document.getElementById("btnText");
const btnIcon = document.getElementById("btnIcon");

btn.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    btnIcon.src = "images/moon.png";
    btnText.innerHTML = "Dark";
  } else {
    btnIcon.src = "images/sun.png";
    btnText.innerHTML = "Light";
  }
};

/* Changing navigation style on scroll */

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("navbar-scrolled", window.scrollY > 0);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}
