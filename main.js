const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartAside);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');


}