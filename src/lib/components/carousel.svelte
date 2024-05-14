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

<div class="relative w-full tablet:w-[600px] tablet:h-[640px] z-10">
	<div
		class="w-full h-full flex scroll-smooth overflow-x-scroll carousel rounded-lg"
		on:mouseover={pauseAutoSlide}
		on:blur={() => 0}
		on:mouseout={resumeAutoSlide}
		on:focus={() => 0}
		role="img"
	>
		{#each images as image}
			<div id={image.id} class="w-full shrink-0 snap-start">
				<img src={image.src} alt={image.alt} class="w-full h-full object-cover block" />
			</div>
		{/each}
	</div>

	<div class="relative bottom-[25px] tablet:bottom-[55px] flex justify-center items-center">
		<button class="bg-none border-none" on:click={navigate}>
			{#each images as image}
				<a
					href={`#${image.id}`}
					class="inline-block w-3 h-3 tablet:w-[0.85rem] tablet:h-[0.85rem] rounded-[50%] bg-[#b4afaf]
			opacity-85 cursor-pointer transition-[opacity] duration-200 hover:opacity-100
	 focus:opacity-100 [&:not(:first-child)]:ml-4"
				>
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
</style>
