export function setAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// If the element is in view, add the visible class
			if (entry.isIntersecting) {
				entry.target.classList.add('slides-in--visible');
			} else {
				// Otherwise, remove the visible class
				entry.target.classList.remove('slides-in--visible');
			}
		});
	});

	document.querySelectorAll('.slides-in').forEach((elem) => {
		observer.observe(elem);
	});
}

export const validEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
