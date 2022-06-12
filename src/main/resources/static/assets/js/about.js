const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let card = button.closest('.card__inner');
		card.classList.toggle('is-flipped');
	});
});
