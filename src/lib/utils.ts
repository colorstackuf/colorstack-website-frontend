export function setAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(
			(entry) => {
				// If the element is in view, add the visible class
				if (entry.isIntersecting) {
					entry.target.classList.add('slides-in--visible');
				} else {
					// Otherwise, remove the visible class
					entry.target.classList.remove('slides-in--visible');
				}
			},
			{ threshold: 1 }
		);
	});

	document.querySelectorAll('.slides-in').forEach((elem) => {
		observer.observe(elem);
	});

	return observer
}

export const validEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

function dateDifferenceInDays(date: string) {
	const currentDate = Date.now();
	const postDate = new Date(date);
	return (currentDate - postDate.getTime()) / 86_400_000;
}

export function calculatePostAge(timestamp: string) {
	let timeSincePost = dateDifferenceInDays(timestamp); // in days

	let unit = timeSincePost.toFixed(0) === '1' ? 'day' : 'days';
	if (timeSincePost >= 7) {
		timeSincePost = timeSincePost / 7; // in weeks
		unit = timeSincePost.toFixed(0) === '1' ? 'week' : 'weeks';
	}

	if (timeSincePost > 4) {
		timeSincePost = timeSincePost / 4; // in months
		unit = timeSincePost.toFixed(0) === '1' ? 'month' : 'months';
	}

	return [timeSincePost, unit];
}
