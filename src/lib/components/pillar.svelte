<script lang="ts">
	export let label: string;
	export let description: string;
	export let icon: string;
</script>

<div class="flex flex-col items-center">
	<img src={icon} alt={`Icon for ${label}`} class="w-12 h-12 mb-6 absolute z-50" />
	<img
		src="/circle.svg"
		alt="Circle background"
		class="w-12 h-12 mb-6 translate-x-2 translate-y-2"
	/>
	<h2 class="font-gotham-medium mb-6">{label}</h2>
	<p class="font-archer text-center text-2xl">{description}</p>
</div>
