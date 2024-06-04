<script lang="ts">
	import { onMount } from 'svelte';

	import InstagramPost from '$lib/components/instagramPost.svelte';
	import { type InstagramData, InstagramFallback } from '$lib/types';

	// TODO: Connect the source to colorstack tech email instead of my personal email
	const url = 'https://feeds.behold.so/driyRZEieOYErh2i3tFk';
	// let data: InstagramData = InstagramFallback;
	let fallbackData: InstagramData = InstagramFallback;
	let promiseData: Promise<InstagramData> = fetch(url).then((response) => response.json());
</script>

<div
	class="grid grid-rows-[0.35fr_auto] laptop:grid-rows-1 laptop:grid-cols-[40%_auto] laptop:h-[700px] gap-3"
>
	{#await promiseData then data}
		<!-- Large Post -->
		<div class="laptop:col-start-1 h-[400px] notebook:h-[500px] laptop:h-full w-full rounded-md">
			<InstagramPost post={data.posts[0]} large={true} />
		</div>

		<!-- Small Posts -->
		<div
			class="laptop:col-start-2 h-[450px] notebook:h-[600px] laptop:h-full grid grid-cols-2 grid-rows-2 gap-3"
		>
			<div class="rounded-md laptop:col-start-1 h-full w-full">
				<InstagramPost post={data.posts[1]} />
			</div>
			<div class="rounded-md laptop:col-start-2 h-full w-full">
				<InstagramPost post={data.posts[2]} />
			</div>
			<div class="rounded-md laptop:col-start-1 laptop:row-start-2 h-full w-full">
				<InstagramPost post={data.posts[3]} />
			</div>
			<div class="rounded-md laptop:col-start-2 laptop:row-start-2 h-full w-full">
				<InstagramPost post={data.posts[4]} />
			</div>
		</div>
	{:catch}
		<!-- Large Post -->
		<div class="laptop:col-start-1 h-[400px] notebook:h-[500px] laptop:h-full w-full rounded-md">
			<InstagramPost post={fallbackData.posts[0]} large={true} />
		</div>

		<!-- Small Posts -->
		<div
			class="laptop:col-start-2 h-[450px] notebook:h-[600px] laptop:h-full grid grid-cols-2 grid-rows-2 gap-3"
		>
			<div class="rounded-md laptop:col-start-1 h-full w-full">
				<InstagramPost post={fallbackData.posts[1]} />
			</div>
			<div class="rounded-md laptop:col-start-2 h-full w-full">
				<InstagramPost post={fallbackData.posts[2]} />
			</div>
			<div class="rounded-md laptop:col-start-1 laptop:row-start-2 h-full w-full">
				<InstagramPost post={fallbackData.posts[3]} />
			</div>
			<div class="rounded-md laptop:col-start-2 laptop:row-start-2 h-full w-full">
				<InstagramPost post={fallbackData.posts[4]} />
			</div>
		</div>
	{/await}
</div>
