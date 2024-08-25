<script>
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<footer
	class="px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x py-6 flex flex-col items-center justify-center font-gotham-book"
>
	<div
		class="flex flex-col laptop:grid laptop:grid-rows-1 laptop:grid-cols-[45%_auto] w-full max-w-page-width"
	>
		<!-- Logo and Title -->
		<a href="/" class="w-fit h-fit laptop:self-center mb-8 laptop:m-0">
			<div class="grid grid-cols-1 w-fit h-fit gap-1.5">
				{#if innerWidth >= 1280}
					<img src="/logos/colorstack.png" alt="ColorStack" width={300} height={90} />
				{:else if innerWidth >= 768}
					<img src="/logos/colorstack.png" alt="ColorStack" width={270} height={60} />
				{:else}
					<img src="/logos/colorstack.png" alt="ColorStack" width={240} height={30} />
				{/if}
				<p
					class="justify-self-end text-colorstackuf-orange text-[0.85rem] notebook:text-[0.95rem] desktop:text-[1.1rem]"
				>
					At University of Florida
				</p>
			</div>
		</a>

		<div
			class="grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(4,_1fr)] gap-y-2 gap-x-4 text-sm tablet:text-base"
		>
			<!-- Navigation Section -->
			<a
				class="nav-btn transition-color hover:text-colorstackuf-orange duration-300 col-start-1 row-start-1"
				href="/about">About</a
			>
			<a
				class="nav-btn transition-color hover:text-colorstackuf-orange duration-300 col-start-1 row-start-2"
				href="/sponsors">Sponsors</a
			>
			<a
				class="nav-btn transition-color hover:text-colorstackuf-orange duration-300 col-start-1 row-start-3"
				href="/students">Students</a
			>
			<a
				class="nav-btn transition-color hover:text-colorstackuf-blue duration-300 col-start-1 row-start-4 leading-5"
				id="become-member"
				href="https://linktr.ee/colorstackuf">Become a Member</a
			>

			<!-- Contact Section -->
			<h class="nav-btn inline-block font-medium">Contact Us</h>
			<a
				class="nav-btn transition-color hover:text-colorstackuf-blue duration-300"
				id="email"
				href="mailto:colorstackuf@gmail.com">colorstackuf@gmail.com</a
			>
			<div class="flex gap-4 tablet:gap-6 items-center">
				<a target="_blank" href="https://www.instagram.com/colorstackuf/">
					<img class="w-6 h-6 tablet:h-8 tablet:w-8" src="/logos/instagram.svg" alt="Instagram" />
				</a>
				<a target="_blank" href="https://www.linkedin.com/company/colorstackuf/">
					<img
						class=" w-[1.6rem] h-[1.6rem] tablet:w-[2.1rem] tablet:h-[2.1rem]"
						src="/logos/linkedin.svg"
						alt="LinkedIn"
					/>
				</a>
				<a target="_blank" href="https://discord.gg/qt9ZfUBqnj">
					<img class="w-6 h-6 tablet:w-8 tablet:h-8" src="/logos/discord.svg" alt="Discord" />
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.nav-btn {
		color: white;
		text-decoration: none;
		width: fit-content;
		font-family: 'Gotham-Book', sans-serif;
	}
</style>
