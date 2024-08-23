<script lang="ts">
	export let label: string;
	export let description: string;
	export let icon: string;
</script>

<div class="slides-in flex flex-col items-center">
	<img src={icon} alt={`Icon for ${label}`} class="w-12 h-12 mb-6 absolute z-50" />
	<img
		src="/circle.svg"
		alt="Circle background"
		class="w-12 h-12 mb-6 translate-x-2 translate-y-2"
	/>
	<h2 class="font-gotham-medium mb-6 text-xl">{label}</h2>
	<p class="font-archer text-center text-xl notebook:text-2xl">{description}</p>
</div>

<style lang="postcss">
	@media (prefers-reduced-motion: no-preference) {
		.slides-in {
			@apply opacity-0 translate-y-10 transition-all duration-500;
		}

		/*
          If Svelte doesn't see the `.slides-in--visible` class in the DOM, it
          will attempt to remove the styles, breaking our animations.
          To prevent this, we use `:global` to force Svelte to keep the styles.
          https://svelte.dev/docs/faq#can-i-tell-svelte-not-to-remove-my-unused-styles
         */
		:global(.slides-in.slides-in--visible) {
			@apply opacity-100 translate-y-0;
		}
	}
</style>
