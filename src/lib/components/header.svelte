<script lang="ts">
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class="header-container">
	<div class="header-box">
		<a href="/" class="logo-container">
			<img class="logo" src="/logos/colorstack-logo-title.svg" alt="Colorstack logo and title" />
		</a>

		<div class="nav-bar">
			{#if innerWidth >= 900}
				<a class="nav-btn fs" href="/about">About</a>
				<a class="nav-btn fs" href="/sponsors">Sponsors</a>
				<a class="nav-btn fs" href="/students">Students</a>
				<a class="nav-btn fs" id="become-member" href="https://linktr.ee/colorstackuf"
					>Become a Member</a
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
	.header-box {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-content: center;
	}

	.header-container {
		padding: 0 var(--mobile-page-padding-y);
		height: max(5vw, 5rem);
		background-color: var(--body-background-blue);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo-container {
		cursor: pointer;
		display: grid;
		justify-content: start;
		align-items: center;
		object-fit: contain;
	}

	.logo {
		object-fit: contain;
		height: 2.5vw;
		min-height: 2rem;
	}

	.nav-bar {
		justify-self: end;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 3rem;
	}

	.nav-btn {
		color: white;
		font-size: clamp(1rem, 1.5vw, 1.5rem);
		text-decoration: none;
		font-family: 'Montserrat', sans-serif;
	}

	#become-member {
		border: 2px solid white;
		padding: 0.75rem 1rem;
		border-radius: 1.2rem;
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
