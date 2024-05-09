<script lang="ts">
    import { type carouselImage } from '$lib/types';
	import Carousel from '$lib/components/carousel.svelte';

	const images: carouselImage[] = [
		{
			id: 'fdl1',
			src: '/nvidia-fdl/fdl1.jpg',
			alt: 'Image 1',
		},
		{
			id: 'fdl2',
			src: '/nvidia-fdl/fdl2.jpg',
			alt: 'Image 2',
		},
		{
			id: 'fdl3',
			src: '/nvidia-fdl/fdl3.jpg',
			alt: 'Image 3',
		},
		{
			id: 'fdl4',
			src: '/nvidia-fdl/fdl4.jpg',
			alt: 'Image 4',
		},
		{
			id: 'fdl5',
			src: '/nvidia-fdl/fdl5.jpg',
			alt: 'Image 5',
		},
	];
</script>

<div class="container">
	<div>
		<h1>WHAT WE DO</h1>
		<p>
			ColorStack's mission is to increase the number of Black and
			Latinx Computer Science graduates that go on to start
			<em>rewarding</em> techincal careers.
		</p>
		<a target="_blank" href="https://linktr.ee/colorstackuf">
			Become a Chapter Member
		</a>
	</div>

	<Carousel {images} />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}

	.container > div:nth-child(1) {
		display: flex;
	}
</style>
