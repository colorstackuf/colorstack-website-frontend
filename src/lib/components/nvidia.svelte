<script lang="ts">
	import type { carouselImage } from '$lib/types';

	const nvidiaImages: carouselImage[] = [
		{ id: 'fdl1', src: '/nvidia-fdl/fdl1.jpg', alt: 'Image 1' },
		{ id: 'fdl2', src: '/nvidia-fdl/fdl2.jpg', alt: 'Image 2' },
		{ id: 'fdl3', src: '/nvidia-fdl/fdl3.jpg', alt: 'Image 3' },
		{ id: 'fdl4', src: '/nvidia-fdl/fdl4.jpg', alt: 'Image 4' },
		{ id: 'fdl5', src: '/nvidia-fdl/fdl5.jpg', alt: 'Image 5' }
	];
</script>

<!-- Bloomberg Images -->
<div class="flex overflow-x-auto py-5 no-scrollbar space-x-2.5">
	{#each nvidiaImages as image}
		<div class="flex-none">
			<img src={image.src} alt={image.alt} class="h-32 tablet:h-64 object-cover rounded-lg" />
		</div>
	{/each}
</div>
