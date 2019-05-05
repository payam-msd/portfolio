// Select DOM Items
const menuBtn = document.querySelector(".McButton");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navBg = document.querySelector(".navigation__background");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("logo-light");
    navBg.classList.add('remove_bg');
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("logo-light");
    navBg.classList.remove('remove_bg');
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");

McButton.click(function() {
  $(this).toggleClass("active");

  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
    McBar3.velocity(
      { top: "50%" },
      { duration: 200, easing: "swing" }
    ).velocity(
      { rotateZ: "90deg" },
      { duration: 800, delay: 200, easing: [500, 20] }
    );
    McButton.velocity(
      { rotateZ: "135deg" },
      { duration: 800, delay: 200, easing: [500, 20] }
    );
  } else {
    McButton.velocity("reverse");
    McBar3.velocity(
      { rotateZ: "0deg" },
      { duration: 800, easing: [500, 20] }
    ).velocity({ top: "100%" }, { duration: 200, easing: "swing" });
    McBar1.velocity("reverse", { delay: 800 });
  }
});

