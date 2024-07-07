document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");

    if (navbarToggler) {
        navbarToggler.addEventListener("click", function() {
            document.documentElement.classList.toggle("show-menu");
        });
    }
});
