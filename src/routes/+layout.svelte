<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import './reset.css';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	inject({ mode: dev ? 'development' : 'production' });
	onMount(() => {
		const animations = setAnimations();
		return () => animations.disconnect();
	});
</script>

<main class="relative grid grid-rows-auto">
	<Header />
	<div class="h-[95px]"></div>
	{@render children?.()}
	<Footer />
</main>
