<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import './reset.css';
	import './global.css';
</script>

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
