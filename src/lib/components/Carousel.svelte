<script lang="ts">
	import { type CarouselImage } from '$lib/types';
	import { onMount } from 'svelte';

	export let images: CarouselImage[];
	export let interval: number = 3000;

	// @ts-expect-error - don't want to import NodeJS types
	let intervalId;
	let imgIndex = 0;
	let carouselContainer: HTMLElement;
	let observer: IntersectionObserver;

	function idToHref(id: string) {
		return `#${id}`;
	}

	// unhighlight the selector for the given index
	function unhighlight(idx: number) {
		if (!images[idx]) return;
		const href = idToHref(images[idx].id);
		const element = document.querySelector(`a[href="${href}"]`) as HTMLElement;
		if (element) {
			element.classList.remove('selected');
		}
	}

	// highlight the selector for the given index
	function highlight(idx: number) {
		if (!images[idx]) return;
		const href = idToHref(images[idx].id);
		const element = document.querySelector(`a[href="${href}"]`) as HTMLElement;
		if (element) {
			element.classList.add('selected');
		}
	}

	// navigate to the image of the given index
	function navigateTo(idx: number) {
		navigateToIndex(idx);
		unhighlight(imgIndex);
		highlight(idx);
		imgIndex = idx;
	}

	function handleNavigationClick(e: MouseEvent) {
		e.preventDefault();
		const href = (e.target as HTMLElement).getAttribute('href');
		if (!href) return;
		const imageId = href.slice(1);
		for (let i = 0; i < images.length; i++) {
			if (images[i].id === imageId) {
				navigateTo(i);
				stopScroll(); // Restart the scroll after the user interacts with the carousel
				startScroll();
				break;
			}
		}
	}

	// Scroll the carousel to the image of the given index
	function navigateToIndex(idx: number) {
		carouselContainer.scrollTo({ left: carouselContainer.clientWidth * idx, behavior: 'smooth' });
	}

	function scrollCarousel() {
		if (!carouselContainer) return;
		if (carouselContainer.scrollWidth > carouselContainer.clientWidth) {
			if (
				carouselContainer.scrollLeft + carouselContainer.clientWidth >=
				carouselContainer.scrollWidth
			) {
				navigateTo(0);
			} else {
				navigateTo(imgIndex + 1);
			}
		}
	}

	function startScroll() {
		intervalId = setInterval(scrollCarousel, interval); // Adjust the interval time as needed
	}

	function stopScroll() {
		// @ts-expect-error - don't want to import NodeJS types
		clearInterval(intervalId);
	}

	// Set up Intersection Observer to detect which image is in view
	function observeImages() {
		const options = {
			root: carouselContainer,
			threshold: 0.5 // Trigger when 50% of the image is visible
		};

		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const imageId = entry.target.id;
					const idx = images.findIndex((image) => image.id === imageId);
					if (idx !== -1) {
						unhighlight(imgIndex);
						highlight(idx);
						imgIndex = idx;
					}
				}
			});
		}, options);

		// Observe each image
		images.forEach((image) => {
			const imageElement = document.getElementById(image.id);
			if (imageElement) {
				observer.observe(imageElement);
			}
		});
	}

	onMount(() => {
		startScroll();
		observeImages();
		return () => {
			stopScroll();
			if (observer) observer.disconnect();
		};
	});
</script>

<div
	class="relative w-full laptop:w-[47.5vw] laptop:h-[50vw] laptop:max-h-[638px] laptop:max-w-[606px] desktop:max-h-[701px] desktop:max-w-[666px] z-10"
>
	<!-- Carousel Images -->
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

	<!-- Carousel Navigation -->
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

<style lang="postcss">
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
