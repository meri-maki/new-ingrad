
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
const body = document.querySelector(('body'));

if (menuBurgerIcon) {
	menuBurgerIcon.addEventListener('click', function (e) {
		menuBurger.classList.toggle("_active");
		body.classList.toggle("_lock");
		menuBurgerIconsOpened.classList.toggle("_active");
		menuBurgerIcon.classList.toggle("_active");
		menuBurgerIconClose.classList.toggle("_active");
	});

}


// YOUTUBE POP UP WINDOW
const playYoutube = document.querySelector(".play-icon");
const popupYoutube = document.querySelector(".pop-up-youtube");
const popupClose = document.querySelector(".pop-up-close");
const popupBody = document.querySelector(".pop-up-body");
const videoElement = document.querySelector('iframe');

if (playYoutube) {
	playYoutube.addEventListener('click', function (e) {
		popupYoutube.classList.toggle("open");
		body.classList.toggle("_lock");
		videoElement.src = "https://www.youtube.com/embed/f1U9jheilKI?autoplay=1";
	})
}

if (popupBody) {
  popupBody.addEventListener("click", function (e) {
    popupBody.closest(".pop-up-youtube").classList.toggle("open");
	  videoElement.src = "";
	  body.classList.toggle("_lock");
  });
}


	










