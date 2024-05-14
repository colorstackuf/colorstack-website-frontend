<script lang="ts">
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class="header-container font-gotham-light">
	<div class="w-full h-full grid grid-cols-[1fr_3fr] content-center">
		<a href="/">
			<img
				class="object-contain w-[20rem]"
				src="/logos/colorstack-logo-title.svg"
				alt="Colorstack logo and title"
			/>
		</a>

		<div class="justify-self-end flex flex-row items-center gap-12">
			{#if innerWidth >= 900}
				<a class="nav-btn" href="/about">About</a>
				<a class="nav-btn" href="/sponsors">Sponsors</a>
				<a class="nav-btn" href="/students">Students</a>
				<a
					class="nav-btn text-white text-[clamp(1rem,_1.5vw,_1.5rem)] no-underline
	 border-2 border-solid border-white py-[0.75rem] px-4 rounded-[1.2rem]"
					href="https://linktr.ee/colorstackuf">Become a Member</a
				>
			{:else}
				<div class="sidebar-menu">
					<img src="/sidebar-menu.svg" alt="Sidebar menu" />
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.header-container {
		padding: 0 var(--mobile-page-padding-y);
		height: max(5vw, 5rem);
		background-color: var(--body-background-blue);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.nav-btn {
		color: white;
		font-size: clamp(1rem, 1.5vw, 1.5rem);
		text-decoration: none;
	}

	@media only screen and (min-width: 1201px) and (max-width: 1920px) {
		.header-container {
			padding: 0 var(--desktop-page-padding-y);
		}
	}

	@media only screen and (min-width: 1921px) {
		.nav-btn {
			font-size: clamp(1.5rem, 2vw, 2rem);
		}

		.header-container {
			padding: 0 var(--lg-desktop-page-padding-y);
		}

		.nav-bar {
			gap: 5rem;
		}
	}

	@media only screen and (min-width: 2560px) {
		.nav-bar {
			gap: 6rem;
		}

		#become-member {
			border-width: 3px;
			padding: 1.3rem 1.3rem;
			border-radius: 2rem;
		}
	}
</style>
