<script lang="ts">
	import InstagramPost from '$lib/components/InstagramPost.svelte';
	import { type InstagramData } from '$lib/types';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	onMount(setAnimations);

	export let data: InstagramData;
</script>

<div
	class="grid grid-rows-[0.35fr_auto] laptop:grid-rows-1 laptop:grid-cols-[40%_auto] laptop:h-[700px] gap-3"
>
	<!-- Large Post -->
	<div class="laptop:col-start-1 h-[400px] notebook:h-[500px] laptop:h-full w-full rounded-md">
		<InstagramPost instagramData={data} post={data.posts[0]} large={true} />
	</div>

	<!-- Small Posts -->
	<div
		class="laptop:col-start-2 h-[450px] notebook:h-[600px] laptop:h-full grid grid-cols-2 grid-rows-2 gap-3"
	>
		<div class="rounded-md laptop:col-start-1 h-full w-full">
			<InstagramPost instagramData={data} post={data.posts[1]} />
		</div>
		<div class="rounded-md laptop:col-start-2 h-full w-full">
			<InstagramPost instagramData={data} post={data.posts[2]} />
		</div>
		<div class="rounded-md laptop:col-start-1 laptop:row-start-2 h-full w-full">
			<InstagramPost instagramData={data} post={data.posts[3]} />
		</div>
		<div class="rounded-md laptop:col-start-2 laptop:row-start-2 h-full w-full">
			<InstagramPost instagramData={data} post={data.posts[4]} />
		</div>
	</div>
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
