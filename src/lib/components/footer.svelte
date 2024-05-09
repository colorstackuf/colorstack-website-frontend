<script lang="ts">
	import { goto } from '$app/navigation';

	function goHome() {
		goto('/');
	}
</script>

<div class="footer-box">
	<div class="logo-container" on:click={goHome}>
		<img class="logo" src="/colorstack-logo-title.svg" alt="Colorstack logo and title" />
	</div>

	<div class="nav-bar">
		<a class="nav-btn" href="/about" >About</a>
		<a class="nav-btn" href="/sponsors" >Sponsors</a>
		<a class="nav-btn" href="/students" >Students</a>
		<a class="nav-btn" id="become-member" href="https://linktr.ee/colorstackuf" >Become a Member</a>

		<h class="nav-btn" id="contact">Contact Us</h>
		<a class="nav-btn" id="email">hello@colorstack.org</a>
		<div class="icon-container">
			<a href="https://www.instagram.com/colorstackuf/">
				<img class="contact-icon" src="/instagram.svg" alt="Instagram" />
			</a>
			<a href="https://www.linkedin.com/company/colorstackuf/">
				<img class="contact-icon" src="/linkedin.svg" alt="LinkedIn" />
			</a>
			<img class="contact-icon" src="/discord.svg" alt="Discord" />
		</div>
	</div>
</div>

<style>
	.footer-box{
		height: 100%;
		background-color: var(--foreground-primary);
		display: grid;
		padding: 1.5rem var(--mobile-page-padding-y);
	}

	.logo-container {
		cursor: pointer;
		display: grid;
		justify-content: start;
		margin-bottom: 1rem;
		object-fit: contain;
	}

	.logo {
		height: 3vw;
		min-width: 10rem;
		justify-self: start;
		object-fit: contain;
	}

	.nav-bar {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		row-gap: 0.5rem;
	}

	.nav-btn[href="/about"] {
		grid-column: 1;
		grid-row: 1;
	}

	.nav-btn[href="/sponsors"] {
		grid-column: 1;
		grid-row: 2;
	}

	.nav-btn[href="/students"] {
		grid-column: 1;
		grid-row: 3;
	}

	.nav-btn[id="become-member"] {
		grid-column: 1;
		grid-row: 4;
	}

	.contact-icon {
		width: 1.7rem;
		height: 1.7rem;
	}

	.icon-container {
		display: flex;
		gap: 0.75rem;
	}

	.contact-icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	.nav-btn {
		color: white;
		font-size: 1.0625rem;
		text-decoration: none;
		font-size: 0.9rem;
		width: fit-content;
		font-weight: 300;
		font-family: 'Montserrat', sans-serif;
	}

	#contact {
		display: inline-block;
		font-weight: 500;
	}

	@media only screen and (min-width: 900px) {
		.footer-box {
			grid-template-columns: 33% auto;
		}
	}

	@media only screen and (min-width: 1201px) and (max-width: 1920px) {
		.footer-box {
			padding: 1.5rem var(--desktop-page-padding-y);
		}

		.nav-btn {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 1921px) {
		.nav-btn {
			font-size: 1.2rem;
		}
	}
</style>
