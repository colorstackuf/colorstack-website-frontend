<script lang="ts">
  import { type carouselImage } from '$lib/types';
  import { onMount, onDestroy } from 'svelte';
  import { flip } from 'svelte/animate';

  export let images: carouselImage[];
  export let gap: number = 20; // Gap between images
  export let interval: number = 3000; // Change image every 3000 milliseconds (3 seconds)
  export let imageWidth: number = 200;

	function navigate(e: MouseEvent) {
		const slide = document.querySelector(event.target.getAttribute('href'));
		if(!slide) return;

		if (slide.scrollIntoViewIfNeeded) {
			e.preventDefault();
			slide.scrollIntoViewIfNeeded();
		} else if (slide.scrollIntoView) {
			e.preventDefault();
			slide.scrollIntoView();
		}
	}
</script>

<div class="carousel" >
	{#each images as image}
		<div id={image.id} class="carousel__item">
			<img src={image.src} alt={image.alt} class="carousel__image" />
		</div>
	{/each}
</div>

<button id="controls" class="controls" on:click={navigate}>
	{#each images as image}
		<a href={`#${image.id}`} class="controls__dot">
			<span class="visuallyhidden">{image.alt}</span>
		</a>
	{/each}
</button>

<style>
  .carousel{
	  display: flex;
	  scroll-snap-type: x mandatory;
	  overflow-x: scroll;
	  scroll-behavior: smooth;
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
</style>
