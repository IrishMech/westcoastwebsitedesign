// ========================================
// WEST COAST WEBSITE DESIGN
// Main JavaScript
// ========================================


// ----------------------------------------
// MOBILE NAVIGATION
// ----------------------------------------

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("mobile-open");

        const menuIsOpen = navigation.classList.contains("mobile-open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen ? "true" : "false"
        );
    });

}


// ----------------------------------------
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ----------------------------------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {
            navigation.classList.remove("mobile-open");
        }

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }

    });

});


// ----------------------------------------
// COPYRIGHT YEAR
// ----------------------------------------

const currentYear = new Date().getFullYear();
const yearElement = document.querySelector("[data-current-year]");

if (yearElement) {
    yearElement.textContent = currentYear;
}