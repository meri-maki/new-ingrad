
// CENTER IMAGE INSIDE SCROLLABLE IMAGE GALLEY
document.getElementById('center-image').scrollIntoView({ behavior: 'auto', inline: 'center' });

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







