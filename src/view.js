document.addEventListener('DOMContentLoaded', function () {
	document.body.classList.add('npagz-toggle-anything-js-enabled');

	const toggles = document.querySelectorAll('.toggle-anything input[type="checkbox"]');
	
	toggles.forEach(toggle => {
		const parent = toggle.closest('.toggle-anything');
		const onClass = parent.getAttribute('data-on-class');
		const offClass = parent.getAttribute('data-off-class');
		const onColor = parent.getAttribute('data-on-color');
		const offColor = parent.getAttribute('data-off-color');
		const defaultState = parent.getAttribute('data-default-state') || 'off';

		const parentToggle = parent.querySelector('.toggle');
		
		const updateVisibility = () => {
			if (toggle.checked) {
				parentToggle.style.backgroundColor = onColor;
				document.querySelectorAll(`.${onClass}`).forEach(element => {
					element.style.removeProperty('display');
				});
				document.querySelectorAll(`.${offClass}`).forEach(element => {
					element.style.display = 'none';
				});
			} else {
				parentToggle.style.backgroundColor = offColor;
				document.querySelectorAll(`.${onClass}`).forEach(element => {
					element.style.display = 'none';
				});
				document.querySelectorAll(`.${offClass}`).forEach(element => {
					element.style.removeProperty('display');
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
