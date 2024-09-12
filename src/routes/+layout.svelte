<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import './reset.css';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	inject({ mode: dev ? 'development' : 'production' });
	onMount(setAnimations);
</script>

<main class="relative grid grid-rows-auto">
	<Header />
	<div class="h-[95px]" />
	<slot />
	<Footer />
</main>
