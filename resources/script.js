
// CENTER IMAGE INSIDE SCROLLABLE IMAGE GALLEY
//document.getElementById("center-image").scrollIntoView({ behavior: "auto", inline: "center" });


/* const centeredImage = document.getElementById("center-image");
const scrollableContainer = document.querySelector(".section-more-clients-images-card"); */

/* function centerThirdImageOfHorizontalGallery() {
  const horizontalGallery = document.querySelector(
    ".section-more-flats-images-card"
  );
  const imageToCenter = document.querySelector("#center-image");

  // Centers the image by setting its parent element's scrollLeft
  horizontalGallery.scrollLeft =
    imageToCenter.offsetLeft -
    horizontalGallery.clientWidth / 2 +
    imageToCenter.clientWidth / 2;
} */

/* centeredImage.parentNode.scrollLeft = centeredImage.clientWidth / 130; */
///130 1.28
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


// COUNT UP STATISTICS

let section_counter = document.querySelector(".section-statistics");
let counters = document.querySelectorAll(".num");


let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 20;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        } else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);	





// SLIDE STORIES

class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add("active");
    this.thumbItems.forEach((item) => item.classList.remove("active"));
    this.thumbItems[index].classList.add("active");
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector(".slide-next");
    const prevBtn = this.slide.querySelector(".slide-prev");
    nextBtn.addEventListener("click", this.next);
    prevBtn.addEventListener("click", this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll(".slide-items > *");
    this.thumb = this.slide.querySelector(".slide-thumb");
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories("slide");












