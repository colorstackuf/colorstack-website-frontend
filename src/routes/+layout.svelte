<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import './reset.css';
	import './global.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="main-container">
	<div></div>
	<main>
		<Header />
		<div>
			<slot />
		</div>
		<Footer />
	</main>
	<div></div>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 100vh;
	}

	main {
		width: 100%;
		display: grid;
		grid-template-rows: var(--header-height) auto var(--footer-height);
	}

</style>
