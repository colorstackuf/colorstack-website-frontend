export function setAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// If the element is in view, add the visible class
			if (entry.isIntersecting && entry.intersectionRatio == 1) {
				entry.target.classList.add('slides-in--visible');
			} else if (entry.intersectionRatio < 1) {
				// Otherwise, remove the visible class
				entry.target.classList.remove('slides-in--visible');
			}
		});
	}, {
		threshold: [0, 1] // Trigger when the element is fully in and out of view
	});

	document.querySelectorAll('.slides-in').forEach((elem) => {
		observer.observe(elem);
	});
}
