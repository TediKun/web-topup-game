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
const linkNav = document.querySelectorAll(".link-nav");
linkNav.forEach(function (val, i) {
    linkNav[i].addEventListener("click", () => {
        navLink.classList.remove("active");
    });
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
// #### Transaksi Modal
const transaksiMenu = document.querySelector(".transaksi");
const btnTransaksi = document.querySelector(".transaksi-btn");
const btnTransaksiClose = document.querySelector(".icn-close-modal");

btnTransaksi.addEventListener("click", function (e) {
    transaksiMenu.classList.add("active");
    document.body.classList.add("active");
    e.preventDefault();
});
btnTransaksiClose.addEventListener("click", function (e) {
    transaksiMenu.classList.remove("active");
    document.body.classList.remove("active");
});
// ####
