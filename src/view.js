document.addEventListener('DOMContentLoaded', function () {
	document.body.classList.add('npagz-slider-toggle-js-enabled');

	const toggles = document.querySelectorAll('.slider-toggle input[type="checkbox"]');
	
	toggles.forEach(toggle => {
		const parent = toggle.closest('.slider-toggle');
		const onClass = parent.getAttribute('data-on-class');
		const offClass = parent.getAttribute('data-off-class');
		const onColor = parent.getAttribute('data-on-color');
		const offColor = parent.getAttribute('data-off-color');
		const displayType = parent.getAttribute('data-display-type') || 'block';
		const defaultState = parent.getAttribute('data-default-state') || 'off';

		const slider = parent.querySelector('.slider');
		
		const updateVisibility = () => {
			if (toggle.checked) {
				slider.style.backgroundColor = onColor;
				document.querySelectorAll(`.${onClass}`).forEach(element => {
					element.style.display = displayType;
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
					element.style.display = displayType;
				});
			}
		};

		// Set initial visibility based on the default state
		if (defaultState === 'on') {
			toggle.checked = true;
		}
		updateVisibility();

		// Add event listener for changes
		toggle.addEventListener('change', updateVisibility);
	});
});
