<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import './reset.css';
	import './global.css';
</script>

<main class="grid grid-rows-auto">
	<Header />
	<slot />
	<Footer />
</main>
