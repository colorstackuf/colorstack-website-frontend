<div
	class="h-full flex flex-col gap-[2rem] bg-body-background-blue px-mobile-padding-x tablet:px-tablet-padding-x"
>
	<a class="laptop:self-center" href="/">
		<img
			src="/logos/colorstack-logo-title.svg"
			alt="Colorstack logo and title"
			class="justify-self-start object-contain w-[23rem]"
		/>
	</a>

	<div class="grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(4,_1fr)] gap-y-2 gap-x-4">
		<!-- Navigation Section -->
		<a class="nav-btn col-start-1 row-start-1" href="/about">About</a>
		<a class="nav-btn col-start-1 row-start-2" href="/sponsors">Sponsors</a>
		<a class="nav-btn col-start-1 row-start-3" href="/students">Students</a>
		<a
			class="nav-btn col-start-1 row-start-4 leading-5"
			id="become-member"
			href="https://linktr.ee/colorstackuf">Become a Member</a
		>

		<!-- Contact Section -->
		<h class="nav-btn inline-block font-medium">Contact Us</h>
		<a class="nav-btn" id="email" href="mailto:colorstackuf@gmail.com">colorstackuf@gmail.com</a>
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

<style>
	.nav-btn {
		color: white;
		text-decoration: none;
		width: fit-content;
		font-family: 'Gotham-Book', sans-serif;
	}

	/*
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
	*/
</style>
