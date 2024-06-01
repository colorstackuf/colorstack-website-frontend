<script lang="ts">
	export let post: any;
</script>

{#if post.mediaType === 'VIDEO'}
	<img
		sizes="(max-width: 400px) calc(100vw - 24px), 400px"
		srcset={`${post.sizes.small.mediaUrl}, ${post.sizes.medium.mediaUrl} `}
		alt={post.caption}
	/>
{/if}
