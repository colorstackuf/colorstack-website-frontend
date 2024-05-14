<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import './reset.css';
	import './global.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="page bg-body-background-blue">
	<Header />
	<slot />
	<Footer />
</main>

<style>
	.page {
		width: 100%;
		display: grid;
		grid-template-rows: auto auto auto;
	}
</style>
