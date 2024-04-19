<script lang="ts">
	import { goto } from '$app/navigation';

	function goHome() {
		goto('/');
	}
</script>

<div class="header-container">
	<div class="header-box">
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
</div>

<style>

	.header-box {
		width: 100%;
		padding: 0 var(--page-padding-y);
		max-height: var(--header-height);
		display: grid;
		grid-template-columns: repeat(2, auto);
		align-content: center;
	}

	.header-container {
		width: 100%;
		background-color: var(--foreground-primary);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
		font-size: 1.1rem;
		text-decoration: none;
		margin-right: 3rem;
		font-weight: 100;
	}

	.nav-bar {
		justify-self: end;
		margin-right: 39px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	#become-member {
		margin-right: 0;
		border: 2px solid white;
		padding: 0.75rem 1rem;
		border-radius: 17px;
	}
</style>
