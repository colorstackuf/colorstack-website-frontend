<script lang="ts">
	import { type carouselImage } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';

	export let images: carouselImage[];
	export let interval: number = 3000;

	const selectedColor = '#F7F7F7';
	const unselectedColor = '#B4AFAF';

	let index: number = 0;
	let intervalId: number;
	let currentSelection: HTMLElement | null;

	function idToHref(id: string) {
		return `#${id}`;
	}

	function updateIndex(href: string) {
		index = images.findIndex((image) => idToHref(image.id) === href);
		if (currentSelection) {
			currentSelection.style.backgroundColor = unselectedColor;
		}
		currentSelection = document.querySelector(`a[href="${href}"]`);
		if (!currentSelection) {
			console.error(`Could not find element with href ${href}`);
			return;
		}
		currentSelection.style.backgroundColor = selectedColor;
	}

	function navigateTo(href: string, e: MouseEvent) {
		const slide = document.querySelector(href);
		if (!slide) return;

		if (slide.scrollIntoView) {
			e.preventDefault();
			slide.scrollIntoView(false);
			// slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
			updateIndex(href);
		}
	}

	function navigate(e: MouseEvent) {
		const href = e.target.getAttribute('href');
		navigateTo(href, e);
	}

	function pauseAutoSlide() {
		clearInterval(intervalId);
	}

	function resumeAutoSlide() {
		startAutoScroll();
	}

	function startAutoScroll() {
		// intervalId = setInterval(() => {
		// 	index = (index + 1) % images.length;
		// 	const id = images[index].id;
		// 	const href = idToHref(id);
		// 	navigateTo(href, new MouseEvent('click'));
		// }, interval);
	}

	onMount(() => {
		currentSelection = document.querySelector(`a[href="${idToHref(images[0].id)}"]`);
		if (!currentSelection) {
			console.error('Could not find the first image');
			return;
		}
		currentSelection.style.backgroundColor = selectedColor;
		startAutoScroll();
		return onDestroy(() => clearInterval(intervalId));
	});
</script>

<div class="relative w-[600px] h-[640px]">
	<div
		class="w-full h-full flex scroll-smooth overflow-x-scroll carousel rounded-lg"
		on:mouseover={pauseAutoSlide}
		on:blur={() => 0}
		on:mouseout={resumeAutoSlide}
		on:focus={() => 0}
		role="img"
	>
		{#each images as image}
			<div id={image.id} class="carousel__item">
				<img src={image.src} alt={image.alt} class="carousel__image" />
			</div>
		{/each}
	</div>

	<div class="control-container">
		<button id="controls" class="controls" on:click={navigate}>
			{#each images as image}
				<a href={`#${image.id}`} class="controls__dot">
					<span class="visuallyhidden">{image.alt}</span>
				</a>
			{/each}
		</button>
	</div>
</div>

<style>
	.carousel {
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	.carousel__item {
		width: 100%;
		flex-shrink: 0;
		scroll-snap-align: start;
	}

	.carousel__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.controls__dot {
		display: inline-block;
		width: 0.85em;
		height: 0.85em;
		border-radius: 50%;
		outline: none;
		background-color: #b4afaf;
		opacity: 0.8;
		cursor: pointer;
		transition: opacity 0.2s;

		&:not(:first-child) {
			margin-left: 1em;
		}

		&:hover,
		&:focus {
			opacity: 1;
		}
	}

	.visuallyhidden {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}

	#controls {
		background: none;
		border: none;
	}

	.control-container {
		position: relative;
		bottom: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
