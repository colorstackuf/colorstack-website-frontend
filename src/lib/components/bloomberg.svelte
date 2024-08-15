<script lang="ts">
	import type { carouselImage } from '$lib/types';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	onMount(setAnimations);

	const bloombergImages: carouselImage[] = [
		{ id: 'Lab1', src: '/bloomberg/Lab1.jpeg', alt: 'Image 1' },
		{ id: 'Lab2', src: '/bloomberg/Lab2.jpeg', alt: 'Image 2' },
		{ id: 'Lab3', src: '/bloomberg/Lab3.jpeg', alt: 'Image 3' },
		{ id: 'Lab4', src: '/bloomberg/Lab4.jpeg', alt: 'Image 4' },
		{ id: 'Lab5', src: '/bloomberg/Lab5.jpeg', alt: 'Image 5' }
	];
</script>

<!-- Bloomberg Images -->
<div class="slides-in flex py-5 space-x-2.5 overflow-auto no-scrollbar">
	{#each bloombergImages as image}
		<div class="flex-none">
			<img src={image.src} alt={image.alt} class="h-32 tablet:h-64 object-cover rounded-lg" />
		</div>
	{/each}
</div>

<style lang="postcss">
	@media (prefers-reduced-motion: no-preference) {
		.slides-in {
			@apply opacity-0 translate-y-10 transition-all duration-500;
		}

		/*
          If Svelte doesn't see the `.slides-in--visible` class in the DOM, it
          will attempt to remove the styles, breaking our animations.
          To prevent this, we use `:global` to force Svelte to keep the styles.
          https://svelte.dev/docs/faq#can-i-tell-svelte-not-to-remove-my-unused-styles
         */
		:global(.slides-in.slides-in--visible) {
			@apply opacity-100 translate-y-0;
		}
	}
</style>
