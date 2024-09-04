<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Hamburger } from 'svelte-hamburgers';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let ariaLabel: string = 'Toggle navigation';

	let burgerOpen: boolean = false;

	function toggleMenu() {
		burgerOpen = !burgerOpen;
		document.body.classList.toggle('no-scroll', burgerOpen);
	}

	function toggleBurger() {
		document.body.classList.toggle('no-scroll', !burgerOpen);
	}

	$: onAbout = $page.url.pathname === '/about';
	$: onSponsors = $page.url.pathname === '/sponsors';
	$: onStudents = $page.url.pathname === '/students';

	$: innerWidth = 0;
	$: {
		// Close the menu when the screen is resized to desktop
		if (innerWidth >= 1024) {
			burgerOpen = false;
			document.body.classList.toggle('no-scroll', false);
		}
	}



	onMount(() => {
		return () => {
			document.body.classList.remove('no-scroll');
		};
	});
</script>

<svelte:window bind:innerWidth />
{#if burgerOpen}
	<div class="absolute top-[86px] inset-0 w-full h-full bg-black bg-opacity-90 z-20" />
{/if}

<header
	class="fixed z-20 w-full padding flex flex-col items-center font-gotham-book h-[95px] py-4 bg-body-background-blue"
>
	<div class="w-full max-w-page-width h-full flex items-center">
		<!-- Logo and Title -->
		<a
			href="/"
			class="w-fit h-fit grow pt-1"
			on:click={() => {
				burgerOpen = false;
				document.body.classList.toggle('no-scroll', false);
			}}
		>
			<div class="grid grid-cols-1 w-fit gap-1.5">
				{#if innerWidth >= 1280}
					<img src="/logos/colorstack.png" alt="ColorStack" width={280} height={69} />
				{:else if innerWidth >= 768}
					<img src="/logos/colorstack.png" alt="ColorStack" width={230} height={39} />
				{:else}
					<img src="/logos/colorstack.png" alt="ColorStack" width={200} height={9} />
				{/if}
				<p
					class="justify-self-end text-colorstackuf-orange text-[0.73rem] notebook:text-[0.83rem] desktop:text-base"
				>
					At University of Florida
				</p>
			</div>
		</a>

		<!-- Navigation Section -->
		<div class="flex items-center gap-12 h-full">
			{#if innerWidth >= 1024}
				<a
					class:on-page={onAbout}
					class="nav-btn text-white hover:text-colorstackuf-orange transition-colors duration-300 pt-1"
					href="/about">About</a
				>
				<a
					class:on-page={onSponsors}
					class="nav-btn text-white hover:text-colorstackuf-orange transition-colors duration-300 pt-1"
					href="/sponsors">Sponsors</a
				>
				<a
					class:on-page={onStudents}
					class="nav-btn text-white hover:text-colorstackuf-orange transition-colors duration-300 pt-1"
					href="/students">Students</a
				>
				<a
					class="border-2 border-solid border-white self-center flex items-center pt-4 mt-5 pb-[1.1rem] px-6 rounded-[1.4rem] hover:bg-colorstackuf-blue hover:border-colorstackuf-blue text-white hover:text-black transition-colors duration-300"
					href="https://linktr.ee/colorstackuf"
					target="_blank"
				>
					<p class=" text-[1.2rem] no-underline text-align-center">
						Become a Member
					</p>
				</a>
			{:else}
				<!-- Hamburger Menu -->
				<div>
					{#if burgerOpen}
						<div
							transition:slide
							class="absolute w-full left-0 top-[81px] h-[14rem] flex flex-col items-left justify-evenly bg-body-background-blue px-6 py-8 gap-4 z-30"
						>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl pt-1"
								class:on-page={onAbout}
								href="/about"
								on:click={() => {
									toggleMenu();
								}}>About</a
							>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl pt-1"
								href="/sponsors"
								class:on-page={onSponsors}
								on:click={() => {
									toggleMenu();
								}}>Sponsors</a
							>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl pt-1"
								href="/students"
								class:on-page={onStudents}
								on:click={() => {
									toggleMenu();
								}}>Students</a
							>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl pt-1"
								href="https://linktr.ee/colorstackuf"
								target="_blank">Become a Member</a
							>
						</div>
					{/if}

					<Hamburger
						--color={'#fd9739'}
						{ariaLabel}
						type="slider"
						on:click={toggleBurger}
						bind:open={burgerOpen}
					/>
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
	.nav-btn {
		transform: translateY(0.5rem);
		font-size: 1.2rem;
		text-decoration: none;
	}
</style>
