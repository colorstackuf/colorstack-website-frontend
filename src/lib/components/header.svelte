<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Hamburger } from 'svelte-hamburgers';
	import { page } from '$app/stores';

	export let ariaLabel: string = 'Toggle navigation';
	let open: boolean = false;
	const toggleMenu = () => {
		open = !open;
		console.log(open);
		document.body.classList.toggle('no-scroll', open);
	};

	const toggleBurger = () => {
		document.body.classList.toggle('no-scroll', !open);
	};

	let onAbout = $page.url.pathname === '/about';
	let onSponsors = $page.url.pathname === '/sponsors';
	let onStudents = $page.url.pathname === '/students';

	const handleStyleChange = (page: string) => {
		console.log(page);
		if (page === 'about') {
			onStudents = onSponsors = false;
			onAbout = true;
		} else if (page === 'sponsors') {
			onStudents = onAbout = false;
			onSponsors = true;
		} else if (page === 'students') {
			onAbout = onSponsors = false;
			onStudents = true;
		} else {
			onAbout = onSponsors = onStudents = false;
		}
	};

	$: innerWidth = 0;
	$: {
		if (innerWidth >= 1024) {
			open = false;
			document.body.classList.toggle('no-scroll', false);
		}
	}
</script>

<svelte:window bind:innerWidth />
<div
	class="h-[80px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x h-[5rem] flex flex-col items-center justify-center font-gotham-book mt-4"
>
	<div class="w-full max-w-page-width h-full flex items-center">
		<a
			href="/"
			class="flex-[1]"
			on:click={() => {
				open = false;
				handleStyleChange('');
				document.body.classList.toggle('no-scroll', false);
			}}
		>
			<img
				class="object-contain w-[20rem]"
				src="/logos/colorstack-logo-title.svg"
				alt="Colorstack logo and title"
			/>
		</a>

		<div class="flex items-center gap-12 h-full">
			{#if innerWidth >= 1024}
				<a
					on:click={() => handleStyleChange('about')}
					class:on-page={onAbout}
					class="nav-btn text-white hover:text-colorstackuf-orange transition-colors duration-300"
					href="/about">About</a
				>
				<a
					on:click={() => handleStyleChange('sponsors')}
					class:on-page={onSponsors}
					class="nav-btn text-white hover:text-colorstackuf-orange transition-colors duration-300"
					href="/sponsors">Sponsors</a
				>
				<a
					on:click={() => handleStyleChange('students')}
					class:on-page={onStudents}
					class="nav-btn text-white hover:text-colorstackuf-orange transition-colors duration-300"
					href="/students">Students</a
				>
				<a
					class="border-2 border-solid border-white self-center flex items-center py-[0.8rem] px-6 rounded-[1.2rem] hover:bg-colorstackuf-blue hover:border-colorstackuf-blue text-white hover:text-black transition-colors duration-300"
					href="https://linktr.ee/colorstackuf"
					target="_blank"
				>
					<p class="translate-y-[0.5rem] text-[1.2rem] no-underline text-align-center">
						Become a Member
					</p>
				</a>
			{:else}
				<div>
					{#if open}
						<div class="absolute top-[86px] left-0 w-full h-full bg-black bg-opacity-90 z-20" />
						<div
							transition:slide
							class="absolute w-full left-0 top-[86px] h-[14rem] flex flex-col items-left justify-evenly bg-body-background-blue px-6 py-8 gap-4 z-20"
						>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl"
								href="/about"
								on:click={() => {
									handleStyleChange('about');
									toggleMenu();
								}}
								class:on-page={onAbout}>About</a
							>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl"
								href="/sponsors"
								on:click={() => {
									handleStyleChange('sponsors');
									toggleMenu();
								}}
								class:on-page={onSponsors}>Sponsors</a
							>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl"
								href="/students"
								on:click={() => {
									handleStyleChange('students');
									toggleMenu();
								}}
								class:on-page={onStudents}>Students</a
							>
							<a
								class="text-white hover:text-colorstackuf-orange transition-colors duration-300 text-xl"
								href="https://linktr.ee/colorstackuf"
								target="_blank">Get Involved</a
							>
						</div>
					{/if}

					<Hamburger
						--color={'#fd9739'}
						{ariaLabel}
						type="slider"
						on:click={toggleBurger}
						bind:open
					/>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.nav-btn {
		transform: translateY(0.5rem);
		font-size: 1.2rem;
		text-decoration: none;
	}

	.on-page {
		color: var(--colorstack-uf-orange);
	}
</style>
