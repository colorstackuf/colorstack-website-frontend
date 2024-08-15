import { type InstagramData, InstagramFallback } from '$lib/types';

const url = 'https://feeds.behold.so/driyRZEieOYErh2i3tFk';
let instagramData: InstagramData = InstagramFallback;

export const load = async () => {
	try {
		const resp = await fetch(url);
		instagramData = await resp.json();
		console.log(instagramData);
	} catch (e) {
		console.error(e);
	}

	return {
		instagramData
	};
};
