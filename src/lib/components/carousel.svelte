<script lang="ts">
	import { type carouselImage } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';

	export let images: carouselImage[];
	export let interval: number = 3000; // Change image every 3000 milliseconds (3 seconds)

	let index: number = 0;
	let intervalId: number;
	let rightButton: HTMLButtonElement;

	function idToHref(id: string) {
		return `#${id}`;
	}

	function updateIndex(href: string) {
		index = images.findIndex((image) => idToHref(image.id) === href);
	}

	function navigateTo(href: string, e: MouseEvent) {

		const slide = document.querySelector(href);
		if(!slide) return;

		if (slide.scrollIntoViewIfNeeded) {
			e.preventDefault();
			slide.scrollIntoViewIfNeeded();
			updateIndex(href);
		} else if (slide.scrollIntoView) {
			e.preventDefault();
			slide.scrollIntoView();
			updateIndex(href);
		}

	}

	function navigate(e: MouseEvent) {
		const href = e.target.getAttribute('href');
		navigateTo(href, e);
	}

	function goLeft(e: MouseEvent) {
		index = (index + images.length - 1) % images.length;
		navigateTo(idToHref(images[index].id), e);
	}

	function goRight(e: MouseEvent) {
		index = (index + 1) % images.length;
		navigateTo(idToHref(images[index].id), e);
	}

	function pauseAutoSlide() {
		console.log('pausing autoscroll...');
		clearInterval(intervalId);
	}

	function resumeAutoSlide() {
		console.log('resuming autoscroll...');
		startAutoScroll();
	}
	
	function startAutoScroll() {
		intervalId = setInterval(() => rightButton.click(), interval);
	}

	onMount(() => {
		startAutoScroll();
		return onDestroy(() => clearInterval(intervalId));
	});
</script>

<div class="carousel-container">
	<div class="carousel" on:mouseover={pauseAutoSlide} on:mouseout={resumeAutoSlide}>
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
	<div class="button-container">
		<button class="nav-button" id="left-button" on:click={goLeft}>Left</button>
		<button class="nav-button" id="right-button" on:click={goRight} bind:this={rightButton}>Right</button>
	</div>
</div>

<style>

.carousel-container {
	position: relative;
}

.button-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

#left-button {
	justify-self: start;
	position: absolute;
	top: 50%;
}

#right-button {
	justify-self: end;
	position: absolute;
	top: 50%;
}

.carousel{
	display: flex;
	scroll-snap-type: x mandatory;
	overflow-x: scroll;
	scroll-behavior: smooth;
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
	display: block;
}

.controls__dot {
	display: inline-block;
	width: 0.85em;
	height: 0.85em;
	border-radius: 50%;
	outline: none;
	background-color: black;
	opacity: 0.8;
	cursor: pointer;
	transition: opacity 0.2s;

	&:not(:first-child) {
		margin-left: 0.25em;
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
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
