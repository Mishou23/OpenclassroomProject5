const slides = [{
		image: "slide1.jpg",
		tagLine: "Impressions of all formats <span>in-store and online</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "High-definition large format prints <span>for your offices and events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Wide range of colors <span>from CMYK to Pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Custom laser-cut <span>stickers</span>"
	}
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const headline = document.querySelector("p");
const bulletContainer = document.querySelector(".dots");
const image = document.querySelector(".banner-img");
const slideCount = slides.length;

let i = 0;

function switchRight() {
	i++;
	if (i >= slideCount) {
		i = 0;
	}
	updateSlide();
	updateBullets();
}

function switchLeft() {
	i--;
	if (i < 0) {
		i = slideCount - 1;
	}
	updateSlide();
	updateBullets();
}

function updateSlide() {
	const currentSlide = slides[i];
	headline.innerHTML = currentSlide.tagLine;
	image.src = `/assets/images/slideshow/${currentSlide.image}`;
	
}

function updateBullets() {
	const bullets = document.querySelectorAll('.dot')
	bullets.forEach((bullet, index) => {
		if (index === i) {
			bullet.classList.add('dot_selected');
		} else {
			bullet.classList.remove('dot_selected');
		}
	});
}
slides.forEach((slide, index) => {
	const bullet = document.createElement('div');
	if(index===0){
		bullet.classList.add('dot_selected');
	}
	bullet.classList.add('dot')
	bulletContainer.appendChild(bullet)
	bullet.addEventListener("click", () => {
	i = index;
	updateSlide();
	updateBullets();
	});
	});
rightArrow.addEventListener("click", switchRight);
leftArrow.addEventListener("click", switchLeft);