<script lang="ts">
	

	import { slide } from 'svelte/transition';
	interface Props {
		/** Accordion component for displaying collapsible content */
		open?: boolean;
		head?: import('svelte').Snippet;
		details?: import('svelte').Snippet;
	}

	let { open = $bindable(false), head, details }: Props = $props();

	let chevron: HTMLImageElement = $state();
	const handleClick = () => {
		chevron.style.transform = open ? 'rotate(0deg)' : 'rotate(90deg)';
		open = !open;
	};
</script>

<div class="bg-[#C6D1EF] border border-white rounded-lg">
	<button
		class="w-full py-6 px-4 transition-bg-color rounded-lg bg-body-background-white hover:bg-colorstackuf-orange duration-300"
		onclick={handleClick}
	>
		<div class="flex w-full h-full items-center">
			<div class="flex-[1] mr-[10px] text-left">
				{@render head?.()}
			</div>

			<img
				src="/chevron.svg"
				alt="chevron"
				bind:this={chevron}
				class="transition linear duration-300 w-[20px] h-[20px]"
			/>
		</div>
	</button>

	<!-- Content to display-->
	{#if open}
		<div class="p-4" transition:slide>
			{@render details?.()}
		</div>
	{/if}
</div>
