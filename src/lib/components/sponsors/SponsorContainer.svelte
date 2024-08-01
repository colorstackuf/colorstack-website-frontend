<script lang="ts">
	export let title: string;
</script>

<div class="flex flex-col gap-12 ml-2">
	<div class="flex flex-row gap-2 tablet:gap-4 items-center">
		<slot name="icon" />
		<h2 class="text-colorstackuf-blue font-archer-book text-2xl">{title}</h2>
	</div>

	<div class="flex flex-row flex-wrap items-start gap-8 tablet:ml-6">
		<slot />
	</div>
</div>
