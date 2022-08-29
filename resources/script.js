
// CENTER IMAGE INSIDE SCROLLABLE IMAGE GALLEY
//document.getElementById("center-image").scrollIntoView({ behavior: "auto", inline: "center" });


const centeredImage = document.getElementById("center-image");
const scrollableContainer = document.querySelector(".section-more-clients-images-card");


centeredImage.parentNode.scrollLeft =
  centeredImage.clientWidth/1.28;//130
/*function scrollToCenter() {
  scrollableContainer.scrollLeft =
    centeredImage[centeredImage.length - 1].offsetLeft;
};



window.addEventListener("load", scrollToCenter()); //W3C
window.attachEvent("onload", scrollToCenter()); //IE */
//const el = document.querySelector("#center-image");
//window.scroll({ top: el.offsetTop, behavior: "smooth" });



// MENU BURGER
const menuBurgerIcon = document.querySelector('.header-burger-icon');
const menuBurgerIconsOpened = document.querySelector('.header-burger-icon-opened');
const menuBurgerIconClose = document.querySelector('.header-burger-icon-close-button');
const menuBurger = document.querySelector(".header-burger-body");

if (menuBurgerIcon) {
	menuBurgerIcon.addEventListener('click', function (e) {
		menuBurger.classList.toggle("_active");
		document.body.classList.toggle("_lock");
		menuBurgerIconsOpened.classList.toggle("_active");
		menuBurgerIcon.classList.toggle("_active");
		menuBurgerIconClose.classList.toggle("_active");
	});

}







