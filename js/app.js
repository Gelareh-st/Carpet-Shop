////////////////////////////////////////////////////////////////////////////////////card information
var cart = document.getElementsByClassName("cart-k");
var cartInfo = document.getElementsByClassName("carpet-info");
var cartImage = document.getElementsByClassName("cart-image");
for (let i = 0; i < cart.length; i++) {
    cart[i].onmouseout = function () {
        cartInfo[i].style.display = "none";
        cartImage[i].style.filter = "opacity(100%)";
    }
    cart[i].onmouseover = function () {
        cartInfo[i].style.display = "block";
        cartImage[i].style.filter = "opacity(40%)";
    }
}
////////////////////////////////////////////////////////////////////////////////////navbar menu display
var navItem = document.getElementsByClassName("nav-item");
var navMenu = document.getElementsByClassName("nav-menu");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].onmouseover = function () {
        navMenu[i].style.display = "block";
    }
    navItem[i].onmouseout = function () {
        navMenu[i].style.display = "none";
    }
}
////////////////////////////////////////////////////////////////////////////////////mobile menu
var openMenuIcon = document.getElementById("menu-icon");
var closeMenuIcon = document.getElementById("close-icon");
var mobileMenu = document.getElementById("mobile-nav");
openMenuIcon.onclick = function () {
    mobileMenu.style.display = "block";
}
closeMenuIcon.onclick = function () {
    mobileMenu.style.display = "none";
    for (let i = 0; i < mobileNavItem.length; i++) {
            mobileNavMenu[i].style.display = "none";   
    }
}
////////////////////////////////////////////////////////////////////////////////////
var mobileNavItem = document.getElementsByClassName("mobile-nav-item");
var mobileNavMenu = document.getElementsByClassName("mobile-nav-menu");
for (let i = 0; i < mobileNavItem.length; i++) {
    mobileNavItem[i].onclick = function () {
        mobileNavMenu[i].style.display = "block";
    }
}
///////////////////////////////////////////////////////////////////////////////////
var buyButton = document.getElementsByClassName("buy");
var number=0;
for (let i=0 ; i<buyButton.length ; i++){
    buyButton[i].onclick = function(){
        number++;
        document.getElementById("products-num").innerText=number;
    }
}