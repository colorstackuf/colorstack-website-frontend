<script lang="ts">
	import { type carouselImage } from '$lib/types';
	import Carousel from '$lib/components/carousel.svelte';

	const images: carouselImage[] = [
		{
			id: 'fdl1',
			src: '/nvidia-fdl/fdl1.jpg',
			alt: 'Image 1'
		},
		{
			id: 'fdl2',
			src: '/nvidia-fdl/fdl2.jpg',
			alt: 'Image 2'
		},
		{
			id: 'fdl3',
			src: '/nvidia-fdl/fdl3.jpg',
			alt: 'Image 3'
		},
		{
			id: 'fdl4',
			src: '/nvidia-fdl/fdl4.jpg',
			alt: 'Image 4'
		},
		{
			id: 'fdl5',
			src: '/nvidia-fdl/fdl5.jpg',
			alt: 'Image 5'
		}
	];
</script>

<div class="container grid grid-cols-2 gap-[20px] px-16">
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-colorstackuf-blue text-[1.4rem] font-gotham-medium">WHAT WE DO</h1>
		<p class="text-white font-archer text-3xl text-center mt-8">
			ColorStack's mission is to increase the number of Black and Latinx Computer Science graduates
			that go on to start
			<em class="text-colorstackuf-orange">rewarding</em> techincal careers.
		</p>
		<a
			target="_blank"
			href="https://linktr.ee/colorstackuf"
			class="bg-colorstackuf-orange py-4 px-7 rounded-3xl mt-16 font-gotham-medium"
		>
			Become a Chapter Member
		</a>
	</div>

	<Carousel {images} />
</div>

<style>
	.container > div:nth-child(1) {
		display: flex;
	}
</style>
