const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	loop: true,
	spaceBetween: 40,
	navigation: {
		nextEl: ".packages__arrow-next",
		prevEl: ".packages__arrow-back"
	},
	breakpoints: {
		310: {
			slidesPerView: 1
		},
		640: {
			slidesPerView: 2
		},
		768: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 4
		}
	}
});
const btn = document.querySelector(".roadmap__button");
const cards = document.querySelectorAll(".roadmap__card");
btn.addEventListener("click", function () {
	for (let card of cards) card.style.display = "flex";
	btn.style.display = "none";
});
