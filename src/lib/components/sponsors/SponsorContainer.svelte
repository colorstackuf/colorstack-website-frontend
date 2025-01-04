<script lang="ts">
	interface Props {
		title: string;
		icon?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let { title, icon, children }: Props = $props();
</script>

<div class="flex flex-col gap-12 ml-2">
	<div class="flex flex-row gap-2 tablet:gap-4 items-center">
		{@render icon?.()}
		<h2 class="text-colorstackuf-blue font-archer-book text-2xl">{title}</h2>
	</div>

	<div class="flex flex-row flex-wrap items-start gap-8 tablet:ml-6">
		{@render children?.()}
	</div>
</div>
