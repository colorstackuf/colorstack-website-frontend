<script lang="ts">
	export let open = false;
	import { slide } from 'svelte/transition';

	let chevron: HTMLImageElement;
	const handleClick = () => {
		chevron.style.transform = open ? 'rotate(0deg)' : 'rotate(90deg)';
		return (open = !open);
	};
</script>

<div class="bg-body-background-white border border-white py-6 px-4 rounded-lg">
	<button class="flex w-full items-center" on:click={handleClick}>
		<div class="flex-[1] mr-[5px] text-left">
			<slot name="head"></slot>
		</div>

		<img
			src="/chevron.svg"
			alt="chevron"
			width={20}
			height={20}
			bind:this={chevron}
			class="transition linear duration-300"
		/>
	</button>

	{#if open}
		<div class="p-4" transition:slide>
			<slot name="details"></slot>
		</div>
	{/if}
</div>
