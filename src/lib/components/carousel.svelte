<script lang="ts">
	import { type carouselImage } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';

	export let images: carouselImage[];
	export let interval: number = 3000;

	let scrollInterval = 0;
	let index = 0;
	let carouselContainer: HTMLElement;

	function idToHref(id: string) {
		return `#${id}`;
	}

	function unhighlight(idx: number) {
		const href = idToHref(images[idx].id);
		const element = document.querySelector(`a[href="${href}"]`) as HTMLElement;
		if (element) {
			element.classList.remove('selected');
		}
	}

	function highlight(idx: number) {
		const href = idToHref(images[idx].id);
		const element = document.querySelector(`a[href="${href}"]`) as HTMLElement;
		if (element) {
			element.classList.add('selected');
			console.log('added selected class');
		}
	}

	function navigateTo(idx: number) {
		navigateToIndex(idx);
		unhighlight(index);
		highlight(idx);
		index = idx;
	}

	function handleNavigationClick(e: MouseEvent) {
		e.preventDefault();
		// @ts-expect-error - href is a valid attribute
		const imageId = e.target.getAttribute('href').slice(1);
		for (let i = 0; i < images.length; i++) {
			if (images[i].id === imageId) {
				navigateTo(i);
				break;
			}
		}
	}

	function navigateToIndex(idx: number) {
		carouselContainer.scrollTo({ left: carouselContainer.clientWidth * idx, behavior: 'smooth' });
	}

	function scrollCarousel() {
		if (carouselContainer.scrollWidth > carouselContainer.clientWidth) {
			if (
				carouselContainer.scrollLeft + carouselContainer.clientWidth >=
				carouselContainer.scrollWidth
			) {
				navigateTo(0);
			} else {
				navigateTo(index + 1);
			}
		}
	}

	function startScroll() {
		scrollInterval = setInterval(scrollCarousel, interval); // Adjust the interval time as needed
	}

	function stopScroll() {
		clearInterval(scrollInterval);
	}

	onMount(startScroll);
	onDestroy(stopScroll);
</script>

<div
	class="relative w-full laptop:w-[47.5vw] laptop:h-[50vw] laptop:max-h-[638px] laptop:max-w-[606px] desktop:max-h-[701px] desktop:max-w-[666px] z-10"
>
	<div
		bind:this={carouselContainer}
		on:mouseover={stopScroll}
		on:mouseout={startScroll}
		on:focus={() => {}}
		on:blur={() => {}}
		class="w-full h-full flex scroll-smooth overflow-x-scroll carousel rounded-lg"
		role="img"
	>
		{#each images as image}
			<div id={image.id} class="w-full shrink-0 snap-start">
				<img src={image.src} alt={image.alt} class="w-full h-full object-cover block" />
			</div>
		{/each}
	</div>

	<div class="relative bottom-[25px] tablet:bottom-[55px] flex justify-center items-center">
		<button class="bg-none border-none" on:click={handleNavigationClick}>
			{#each images as image, i}
				<a
					href={`#${image.id}`}
					class="inline-block w-3 h-3 tablet:w-[0.85rem] tablet:h-[0.85rem] rounded-[50%] bg-[#b4afaf]
			opacity-100 cursor-pointer transition duration-200 hover:bg-[#f7f7f7]
	 focus:opacity-100 [&:not(:first-child)]:ml-4"
					class:selected={i === 0}
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
