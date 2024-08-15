<script lang="ts">
	import type { carouselImage } from '$lib/types';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	onMount(setAnimations);

	const nvidiaImages: carouselImage[] = [
		{ id: 'fdl1', src: '/nvidia-fdl/fdl1.jpg', alt: 'Image 1' },
		{ id: 'fdl2', src: '/nvidia-fdl/fdl2.jpg', alt: 'Image 2' },
		{ id: 'fdl3', src: '/nvidia-fdl/fdl3.jpg', alt: 'Image 3' },
		{ id: 'fdl4', src: '/nvidia-fdl/fdl4.jpg', alt: 'Image 4' },
		{ id: 'fdl5', src: '/nvidia-fdl/fdl5.jpg', alt: 'Image 5' }
	];
</script>

<!-- Bloomberg Images -->
<div class="slides-in flex overflow-auto py-5 no-scrollbar space-x-2.5">
	{#each nvidiaImages as image}
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
