<script lang="ts">
	import { onMount } from 'svelte';
	import type { ContactData } from '$lib/types';
	import { validEmail, setAnimations } from '$lib/utils';
	onMount(setAnimations);

	const eboard_members = [
		{
			name: 'Mya Ramsey',
			position: 'President',
			image: 'e-board/Mya_Ramsey.png',
			linkedin: 'https://www.linkedin.com/in/mya-ramsey-uf/'
		},
		{
			name: 'Yakub Mungai',
			position: 'Vice Presdient',
			image: 'e-board/Yakub_Mungai.png',
			linkedin: 'https://www.linkedin.com/in/yakubjmungai/'
		},
		{
			name: 'Bryan Mbaji',
			position: 'Treasurer',
			image: 'e-board/Bryan_Mbaji.png',
			linkedin: 'https://www.linkedin.com/in/brian-mbaji/'
		},
		{
			name: 'Kacie Ross',
			position: 'VP of Marketing',
			image: 'e-board/Kacie_Ross.png',
			linkedin: 'https://www.linkedin.com/in/kacierossuf/'
		},
		{
			name: 'Yohance de Souza',
			position: 'Administration Chair',
			image: 'e-board/Yohance_de_Souza.png',
			linkedin: 'https://www.linkedin.com/in/yohance-de-souza-217a291b5/'
		},
		{
			name: 'Soraya Sardine',
			position: 'Graphic Design Coordinator',
			image: 'e-board/Soraya_Sardine.png',
			linkedin: 'https://www.linkedin.com/in/soraya-sardine-64662216a/'
		},
		// {
		//      name: 'Natahja Graddy',
		//      position: 'VP of Events',
		//     	image: 'e-board/Natahja_Graddy.png',
		// 		linkedin: 'https://www.linkedin.com/in/natahja-graddy/'
		// },
		{
			name: 'Yonas Worku',
			position: 'Career Events Coordinator',
			image: 'e-board/Yonas_Worku.png',
			linkedin: 'https://www.linkedin.com/in/yonasworku/'
		},
		{
			name: 'Matthew DeGuzman',
			position: 'Technical Events Coordinator',
			image: 'e-board/Matthew_DeGuzman.png',
			linkedin: 'https://www.linkedin.com/in/matthew-deguzman/'
		},
		{
			name: 'Alex Huper',
			position: 'Academic Programs Coordinator',
			image: 'e-board/Alex_Huper.png',
			linkedin: 'https://www.linkedin.com/in/alex-huper/'
		},
		{
			name: 'Josue Vicente',
			position: 'Academic Events Coordinator',
			image: 'e-board/Josue_Vicente.png',
			linkedin: 'https://www.linkedin.com/in/josue-e-vicente/'
		},
		{
			name: 'Abigail Erefah',
			position: 'Digital Marketing Coordinator',
			image: 'e-board/Abigail_Erefah.png',
			linkedin: 'https://www.linkedin.com/in/abigail-erefah/'
		},
		{
			name: 'Dr. Sanethia Thomas',
			position: 'Faculty Advisor',
			image: 'e-board/Sanethia_Thomas.png',
			linkedin: 'https://www.linkedin.com/in/sanethia-thomas-phd-112806/'
		},
		{
			name: 'Carson Johnson',
			position: 'Founding President',
			image: 'e-board/Carson_Johnson.png',
			linkedin: 'https://www.linkedin.com/in/carson74johnson/'
		}
	];

	const contactData: ContactData = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	};

	const contactErrors = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	};

	const validateForm = () => {
		let valid = true;
		if (!contactData.firstName) {
			valid = false;
			contactErrors.firstName = 'First name is required';
		} else {
			contactErrors.firstName = '';
		}

		if (!validEmail(contactData.email)) {
			valid = false;
			contactErrors.email = 'Invalid email';
		} else {
			contactErrors.email = '';
		}

		if (contactData.message.trim() === '') {
			valid = false;
			contactErrors.message = 'Message is required';
		} else {
			contactErrors.message = '';
		}

		return valid;
	};
	async function submitForm() {
		if (!validateForm()) {
			return;
		}

		const response = await fetch('/api/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contactData)
		});

		if (response.ok) {
			alert('Email sent successfully');
		} else {
			response
				.json()
				.then((data) => {
					alert(data.message);
				})
				.catch(() => {
					alert('An error occurred');
				});
		}
	}
</script>

<div class="relative bg-body-background-white">
	<!-- ColorStack UF intro -->
	<section class="lg-desktop:max-w-[1536px] mx-auto">
		<div
			class="relative flex flex-col items-end laptop:items-start bg-[url('/graphics/about-intro.png')] bg-cover bg-no-repeat bg-center h-[25rem] laptop:h-[45rem] min-[1536px]:rounded-b-lg"
		>
			<div
				class="slides-in relative grid grid-cols-1 top-[16rem] laptop:top-0 laptop:left-[3rem] laptop:top-[5rem] z-10 bg-body-background-blue pl-7 pr-4 py-7 laptop:p-12 rounded-l-lg laptop:rounded-lg mb-12 w-11/12 min-w-[310px] laptop:w-[460px]"
			>
				<h1
					class="text-white text-lg tablet:text-2xl laptop:text-3xl lg-desktop:text-4xl font-gotham-medium pb-4 laptop:pb-8"
				>
					ColorStack UF is a team committed to...
				</h1>
				<p
					class="text-white font-archer-light text-lg tablet:text-xl leading-6 self-start lg-desktop:text-2xl"
				>
					Investing in the futures of those left behind every day. We are a tech student
					organization cultivating the strongest campus community of its kind to deliver community
					building, academic support, and career development opportunities.
				</p>
				<a href="https://linktr.ee/colorstackuf" target="_blank" class="self-end laptop:self-start">
					<div
						class="text-black w-44 text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-3 px-7 rounded-3xl mt-8 font-gotham-medium"
					>
						View Link Tree
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- About ColorStack National -->
	<section
		class="mt-60 laptop:mt-0 laptop:bg-body-background-white bg-body-background-blue max-w-[1536px] mx-auto laptop:py-40 py-6 px-8"
	>
		<div
			class="slides-in bg-body-background-blue laptop:rounded-lg laptop:p-12 desktop:p-16 grid grid-cols-1 laptop:grid-cols-2 gap-x-12"
		>
			<div class="w-full pt-4 laptop:pt-0">
				<img src="graphics/colorstack_students.png" alt="People" class="rounded-md" />
			</div>

			<div class="flex flex-col items-center self-center gap-y-4 desktop:gap-y-8">
				<h1
					class="text-white text-center text-[1.3rem] tablet:text-2xl desktop:text-4xl desktop:pt-8 pt-6 font-gotham-medium"
				>
					About ColorStack National
				</h1>
				<p
					class="text-white text-center font-archer-light text-sm tablet:text-base desktop:text-lg lg-desktop:text-2xl mb-4 w-full max-w-[580px] laptop:max-w-[750px]"
				>
					The ColorStack Family is our community of 10,000+ Black and Latinx Computer Science
					students from 900+ schools nationwide. We’re committed to providing community building,
					academic support, and career development year-round through our active Slack channel,
					monthly Fam Fridays, and partnerships with 70+ top tech companies.
				</p>
				<button
					class="bg-colorstackuf-orange transition-all hover:bg-colorstackuf-blue hover:text-white duration-300 py-3 desktop:py-4 px-7 rounded-full font-gotham-medium text-black text-center text-xs desktop:text-base"
				>
					<a href="https://app.colorstack.io/apply" target="_blank"> Become a National Member </a>
				</button>
			</div>
		</div>
	</section>

	<!-- Eboard -->
	<section
		class="relative top-[-1px] bg-body-background-blue flex flex-col items-center pt-16 laptop:pt-0"
	>
		<div
			class="slides-in w-full max-w-[1536px] flex flex-col justify-center font-gotham-medium py-12 gap-y-4 px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x"
		>
			<h1 class="text-white text-[2rem] text-center laptop:text-[3rem] desktop:[4rem]">
				Meet the E-Board
			</h1>
			<p class="text-white text-center pb-4 text-lg laptop:text-2xl">2024-2025</p>

			<div
				class="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-x-16 gap-y-6 tablet:gap-y-10 px-6"
			>
				{#each eboard_members as member}
					<!-- Member -->
					<div
						class="grid grid-cols-1 justify-items-center text-white text-[1.4rem] font-gotham-medium w-fit"
					>
						<!-- Image -->
						<div
							class="relative w-[44vw] h-[44vw] tablet:w-[27vw] desktop:w-[20vw] max-w-[500px] desktop:max-w-[300px] tablet:h-[27vw] desktop:h-[20vw] max-h-[500px] desktop:max-h-[300px] mb-2 notebook:mb-4"
						>
							<div
								class="group block w-full h-full transition-all duration-300 hover:bg-neutral-950/70 absolute grid grid-cols-1 justify-items-center items-center"
							>
								<a href={member.linkedin} target="_blank">
									<img
										src="/logos/linkedin.svg"
										alt="LinkedIn"
										width={40}
										height={40}
										class="opacity-0 group-hover:opacity-100 transition-all duration-300"
									/>
								</a>
							</div>
							<img
								src={member.image}
								alt="Photo of {member.name}"
								class="w-full h-full object-cover rounded-lg laptop:rounded-xl items-start"
							/>
						</div>

						<h1
							class="text-center text-[3vw] tablet:text-[2.2vw] desktop:text-[min(1.8vw,1.8rem)] leading-6 tablet:leading-8 desktop:leading-10"
						>
							{member.name}
						</h1>
						<p
							class="font-gotham-light text-center text-[1.8vw] min-[360px]:text-[1.9vw] tablet:text-[min(1.37vw,0.9rem)] desktop:text-[min(1.125vw,1.2rem)]"
						>
							{member.position}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<section class="bg-body-background-light-blue">
	<!-- Contact Us -->
	<div
		class="slides-in lg-desktop:max-w-[1536px] mx-auto laptop:px-24 laptop:py-36 py-12 px-12 mb-7"
	>
		<div class="grid grid-cols-1 laptop:grid-cols-2 laptop:cols-start-2 gap-12">
			<div class="text-black">
				<h1 class="text-3xl lg-desktop:text-5xl pb-8 font-gotham-medium">Contact Us</h1>
				<p class="text-2xl lg-desktop:text-4xl font-archer">
					If you have any questions or concerns don't hesitate to contact us!
				</p>
			</div>

			<div class="flex flex-col gap-4 justify-center w-full font-archer lg-desktop:text-2xl">
				<div>
					<input
						type="text"
						placeholder="First Name"
						class="w-full h-12 rounded-md px-3"
						style={contactErrors.firstName && 'border: 2px solid red'}
						bind:value={contactData.firstName}
						on:change={() => (contactErrors.firstName = '')}
					/>
					{#if contactErrors.firstName}
						<p class="text-red-800 text-sm">First Name is required</p>
					{/if}
				</div>
				<input
					type="text"
					placeholder="Last Name"
					class="w-full h-12 rounded-md px-3"
					bind:value={contactData.lastName}
				/>
				<div>
					<input
						type="text"
						placeholder="Email Address"
						class="w-full h-12 rounded-md px-3"
						style={contactErrors.email && 'border: 2px solid red'}
						bind:value={contactData.email}
						on:change={() => (contactErrors.email = '')}
					/>
					{#if contactErrors.email}
						<p class="text-red-800 text-sm">Invalid Email</p>
					{/if}
				</div>
				<div>
					<textarea
						placeholder="Message"
						class="w-full h-48 rounded-md p-3 resize-none align-bottom"
						style={contactErrors.message && 'border: 2px solid red'}
						bind:value={contactData.message}
						on:change={() => (contactErrors.message = '')}
					/>
					{#if contactErrors.message}
						<p class="text-red-800 text-sm">Message is required</p>
					{/if}
				</div>
				<button
					class="w-full text-white bg-body-background-blue transition-bg-color transition-color hover:bg-colorstackuf-orange hover:text-black duration-300 py-4 px-7 rounded-md mt-4 font-gotham-medium"
					on:click={submitForm}
				>
					Submit
				</button>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@media (prefers-reduced-motion: no-preference) {
		.slides-in {
			@apply opacity-0 translate-y-10 transition-all duration-500;
		}

		/*
          If Svelte doesn't see the `.slides-in--visible` class in the DOM, it
          will attempt to remove the styles, breaking our animations.
          To prevent this, we use `:global` to force Svelte to keep the styles.
          https://svelte.dev/docs/faq#can-i-tell-svelte-not-to-remove-my-unused-styles
         */
		:global(.slides-in.slides-in--visible) {
			@apply opacity-100 translate-y-0;
		}
	}
</style>
