<script lang="ts">
	import { goto } from '$app/navigation';

	function goHome() {
		goto('/');
	}
</script>

<div class="header-container">
	<div class="logo-container" on:click={goHome}>
		<img class="logo" src="/colorstack-logo-title.svg" alt="Colorstack logo and title" />
		<h class="uf">At University of Florida</h>
	</div>
	<div class="nav-bar">
		<a class="nav-btn" href="/about" >About</a>
		<a class="nav-btn" href="/sponsors" >Sponsors</a>
		<a class="nav-btn" href="/students" >Students</a>
		<a class="nav-btn" id="become-member" href="https://linktr.ee/colorstackuf" >Become a Member</a>
	</div>
</div>

<style>
	.header-container {
		width: 100%;
		max-height: var(--header-height);
		background-color: var(--foreground-primary);
		display: grid;
		grid-template-columns: repeat(2, auto);
		align-content: center;
	}

	.logo-container {
		cursor: pointer;
		height: 100%;
		margin-left: 26px;
		width: 36px;
		display: grid;
		grid-template-rows: 36px 1rem;
	}

	.logo {
		height: auto;
		justify-self: end;
	}

	.uf {
		justify-self: end;
		color: var(--text-emphasis);
		font-size: 0.92rem;
		letter-spacing: 1px;
	}

	.nav-btn {
		color: white;
		font-weight: 100;
		font-size: 1.1rem;
		text-decoration: none;
		margin-right: 3rem;
	}

	.nav-bar {
		justify-self: end;
		margin-right: 39px;
	}

	#become-member {
		margin-right: 0;
		border: 2px solid white;
		padding: 0.5rem 1rem;
		border-radius: 15px;
	}
</style>
