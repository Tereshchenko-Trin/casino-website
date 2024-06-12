const swiper = new Swiper('.swiper', {

	direction: 'horizontal',
	loop: true,

	navigation: {
		nextEl: '.packages__arrow-next',
		prevEl: '.packages__arrow-back',
	},

	slidesPerView: 1,
});