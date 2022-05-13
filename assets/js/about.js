const cards = document.querySelectorAll('.card-face');

cards.forEach((card) => {
	card.addEventListener('click', function () {
		console.log('Yes');
		card.classList.toggle('is-flipped');
	});
});
