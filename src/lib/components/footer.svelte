<script lang="ts">
	import { goto } from '$app/navigation';

	function goHome() {
		goto('/');
	}
</script>

<div class="footer-box">
	<div class="logo-container" on:click={goHome}>
		<img class="logo" src="/colorstack-logo-title.svg" alt="Colorstack logo and title" />
		<h class="uf">At University of Florida</h>
	</div>

	<div class="nav-bar">
		<a class="nav-btn" id="footer" href="/about" >About</a>
		<a class="nav-btn" id="footer" href="/sponsors" >Sponsors</a>
		<a class="nav-btn" id="footer" href="/students" >Students</a>
	</div>

	<div class="nav-bar">
		<a class="nav-btn" id="footer">Contact Us</a>
		<a class="nav-btn" id="footer">hello@colorstack.org</a>
		<div class="icon-container">
			<img class="contact-icon" src="/instagram.svg" alt="Instagram" />
			<img class="contact-icon" src="/slack.svg" alt="Slack" />
			<img class="contact-icon" src="/discord.svg" alt="Discord" />
		</div>
	</div>
</div>

<style>
	.footer-box{
		width: 100%;
		height: 100%;
		background-color: var(--foreground-primary);
		display: grid;
		grid-template-columns: 40% 30% auto;
		padding: 1rem var(--page-padding-y);
	}

	.logo-container {
		cursor: pointer;
		height: 100%;
		display: grid;
		grid-template-rows: 36px 1rem;
		align-content: center;
		justify-content: start;
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

	.nav-bar {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
	}

	#footer {
		font-size: 0.9rem;
	}

	.contact-icon {
		width: 1.7rem;
		height: 1.7rem;
	}

	.icon-container {
		display: flex;
		gap: 1.2rem;
	}
</style>
