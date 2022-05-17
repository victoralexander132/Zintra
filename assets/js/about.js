const buttons = document.querySelectorAll('button.flip');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let card = button.closest('.card__inner');
		card.classList.toggle('is-flipped');
	});
});
