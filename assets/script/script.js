// Navbar Scroll Sticky
const navbar = document.querySelector(".navbar-f");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});
// ####
// Navbar toggle
const navLink = document.querySelector(".navbar-link");
const navtoggle = document.querySelector(".bars-menu");
navtoggle.addEventListener("click", function (e) {
    navLink.classList.toggle("active");
    e.preventDefault();
});
// ####
// Search Navbar
const searchNavbar = document.querySelector(".search-navbar");
const btnSearch = document.querySelector(".search-btn");
btnSearch.addEventListener("click", function (e) {
    searchNavbar.classList.toggle("active");
    e.preventDefault();
});
// ####

// #### Click Luar Events
document.addEventListener("click", e => {
    if (!navLink.contains(e.target) && !navtoggle.contains(e.target)) {
        navLink.classList.remove("active");
    }
    if (!searchNavbar.contains(e.target) && !btnSearch.contains(e.target)) {
        searchNavbar.classList.remove("active");
    }
});
// ####
