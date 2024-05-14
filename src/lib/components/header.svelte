<script lang="ts">
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class="header-container font-gotham-book mt-4">
	<div class="w-full h-full flex items-center">
		<a href="/" class="flex-[1]">
			<img
				class="object-contain w-[20rem]"
				src="/logos/colorstack-logo-title.svg"
				alt="Colorstack logo and title"
			/>
		</a>

		<div class="flex items-center gap-12 h-full">
			{#if innerWidth >= 900}
				<a class="nav-btn" href="/about">About</a>
				<a class="nav-btn" href="/sponsors">Sponsors</a>
				<a class="nav-btn" href="/students">Students</a>
				<div
					class="border-2 border-solid border-white self-center flex items-center py-[0.8rem] px-6 rounded-[1.2rem]"
				>
					<a class="nav-btn text-align-center" href="https://linktr.ee/colorstackuf"
						>Become a Member</a
					>
				</div>
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
		transform: translateY(0.5rem);
		color: white;
		font-size: 1.2rem;
		text-decoration: none;
	}

	/*
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
	*/
</style>
