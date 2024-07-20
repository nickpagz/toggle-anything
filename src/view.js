document.addEventListener('DOMContentLoaded', function () {
	const toggles = document.querySelectorAll('.slider-toggle input[type="checkbox"]');
	
	toggles.forEach(toggle => {
		const parent = toggle.closest('.slider-toggle');
		const onClass = parent.getAttribute('data-on-class');
		const offClass = parent.getAttribute('data-off-class');
		const onColor = parent.getAttribute('data-on-color');
		const offColor = parent.getAttribute('data-off-color');
		const sliderWidth = parseFloat(parent.style.width);
		const sliderHeight = parseFloat(parent.style.height);
		const sliderBorderRadius = parseFloat(parent.style.borderRadius);
		const buttonWidth = parseFloat(parent.querySelector('.slider').style.width);
		const gap = parseFloat(parent.querySelector('.slider').style.left);

		const slider = parent.querySelector('.slider');
		
		const updateVisibility = () => {
			if (toggle.checked) {
				slider.style.backgroundColor = onColor;
				document.querySelectorAll(`.${onClass}`).forEach(element => {
					element.style.display = 'block';
				});
				document.querySelectorAll(`.${offClass}`).forEach(element => {
					element.style.display = 'none';
				});
			} else {
				slider.style.backgroundColor = offColor;
				document.querySelectorAll(`.${onClass}`).forEach(element => {
					element.style.display = 'none';
				});
				document.querySelectorAll(`.${offClass}`).forEach(element => {
					element.style.display = 'block';
				});
			}
		};

		// Set initial visibility based on the toggle state
		updateVisibility();

		// Add event listener for changes
		toggle.addEventListener('change', updateVisibility);
	});
});
