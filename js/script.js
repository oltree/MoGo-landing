//accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
	accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
	var itemClass = this.parentNode.className;
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'accordionItem close';
	}
	if (itemClass == 'accordionItem close') {
		this.parentNode.className = 'accordionItem open';
	}
}

//swiper slider
new Swiper('.comments__content', {
	simulateTouch: true,
	grabCursor: true,
	slideToClickesSlide: true,
	slidesPerView: 1,
	spaceBetween: 970,
	initialSlide: 1,
	loop: true,
	autoPlay: {
		delay: 5000,
		disableOnInteraction: false
	},
	speed: 500,
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})

//burger-menu
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});


