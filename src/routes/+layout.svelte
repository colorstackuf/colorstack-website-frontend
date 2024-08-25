<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import './reset.css';
	import './global.css';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';

	onMount(setAnimations);
</script>

<main class="relative grid grid-rows-auto">
	<Header />
	<div class="h-[81px]" />
	<slot />
	<Footer />
</main>
