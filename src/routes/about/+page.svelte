<script>
	import { onMount } from 'svelte';

	let eboard_members = [
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
		},
	];

	let first_name = '';
	let last_name = '';
	let email = '';
	let message = '';

	async function submitForm() {
		const response = await fetch('/about', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				first_name,
				last_name,
				email,
				message
			})
		});

		if (response.ok) {
			alert('Email sent successfully');
		} else {
			alert('Failed to send email');
		}
	}
</script>

<div class="bg-body-background-white">
	<!-- ColorStack UF intro -->
	<div class="h-[40rem] h-auto laptop:h-auto lg-desktop:max-w-[1920px] mx-auto">
		<div class="relative flex flex-col items-end laptop:items-start bg-[url('graphics/about-intro.png')] bg-cover bg-no-repeat bg-center h-[25rem] laptop:h-[45rem]">
			<div class="relative grid grid-cols-1 top-[16rem] laptop:top-0 laptop:left-[3rem] laptop:top-[5rem] z-10 bg-body-background-blue pl-7 pr-4 py-7 laptop:p-12 rounded-l-lg laptop:rounded-lg mb-12 w-11/12 min-w-[310px] h-[380px] laptop:w-[460px] laptop:h-auto">
				<h1 class="text-white text-lg tablet:text-2xl laptop:text-3xl lg-desktop:text-4xl font-gotham-medium laptop:pb-4 ">
					ColorStack UF is a team committed to...
				</h1>
				<p class="text-white font-archer text-lg tablet:text-xl leading-6 self-start lg-desktop:text-2xl">
					Investing in the futures of those left behind every day. We’re a tech student organization
					cultivating the strongest campus community of its kind to deliver community building,
					academic support, and career development opportunities.
                </p>
				<a href="https://linktr.ee/colorstackuf" target="_blank" class="self-end laptop:self-start">
					<div class="text-black w-44 text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-3 px-7 rounded-3xl mt-8 font-gotham-medium">
						View Link Tree
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- About ColorStack National -->
	<div class="mt-60 laptop:mt-0">
		<div class="laptop:bg-body-background-white bg-body-background-blue lg-desktop:max-w-[1920px] mx-auto laptop:py-40 py-6 px-8">
			<div class="bg-body-background-blue rounded-lg laptop:p-12 desktop:p-16">
				<div class="relative grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 gap-x-12">
					<img src="graphics/colorstack_students.png" alt="People" class="w-full rounded-lg" />

					<div class="flex flex-col items-center text-center laptop:max-h-72">
						<h1 class="text-white text-xl laptop:text-2xl desktop:text-4xl desktop:pt-8 pt-4 font-gotham-medium pb-4 desktop:pb-12">
							About ColorStack National
						</h1>
						<p class="text-white font-archer text-base desktop:text-lg lg-desktop:text-2xl">
							The ColorStack Family is our community of 10,000+ Black and Latinx Computer Science
							students from 900+ schools nationwide. We’re committed to providing community building,
							academic support, and career development year-round through our active Slack channel,
							monthly Fam Fridays, and partnerships with 70+ top tech companies.
						</p>
						<a href="https://app.colorstack.io/apply" target="_blank">
							<button class="text-black text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-12 font-gotham-medium lg-desktop:text-2xl">
								Become a National Member
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Eboard Grid -->
	<div class="bg-body-background-blue">
		<div class="lg-desktop:max-w-[1920px] mx-auto py-12 laptop:px-12 px-6">
			<div class="flex flex-col justify-center items-center font-gotham-medium pb-12">
				<h1 class="text-white text-[2rem] text-center lg-desktop:[3rem]">
					Meet the E-Board
				</h1>
				<p class="text-white text-center pt-3 lg-desktop:text-2xl">
					2024-2025
				</p>
			</div>
			<div class="grid grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-x-10 gap-y-12">
				{#each eboard_members as member}
					<div class="grid grid-cols-1 justify-items-center items-center text-white text-[1.4rem] font-gotham-medium">
						<div class="relative group w-[32vw] h-[32vw] max-w-72 max-h-72">
							<a href="{member.linkedin}" target="_blank" class="block w-full h-full">
							  <img
								src={member.image}
								alt="Photo of {member.name}"
								class="w-full h-full object-cover rounded-md group-hover:opacity-50"
							  />
							  <div class="absolute inset-0 flex items-center justify-center">
								<img
								  src="logos/linkedin.svg"
								  alt="LinkedIn Logo"
								  class="opacity-0 group-hover:opacity-75 transition-opacity duration-500 ease-in-out"
								/>
							  </div>
							</a>
						  </div>						  
						<h1 class="py-3 desktop:py-5 text-base text-center laptop:text-2xl lg-desktop:text-3xl">{member.name}</h1>
						<p class="text-xs desktop:text-lg lg-desktop:text-xl text-center laptop:text-base">{member.position}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div class="bg-body-background-blue">
	<!-- Contact Us -->
	<div class="bg-body-background-light-blue">
		<div class="lg-desktop:max-w-[1920px] mx-auto laptop:px-24 laptop:py-36 py-12 px-12 mb-7">
			<div class="grid grid-cols-1 laptop:grid-cols-2 laptop:cols-start-2 gap-12">
				<div class="text-black">
					<h1 class="text-3xl lg-desktop:text-5xl pb-8 font-gotham-medium">
						Contact Us
					</h1>
					<p class="text-2xl lg-desktop:text-4xl font-archer">
						If you have any questions or concerns don't hesitate to contact us!
					</p>
				</div>

				<div class="justify-center items-center w-full font-archer lg-desktop:text-2xl">
					<input
						type="text"
						placeholder="First Name"
						class="w-full h-12 mt-4 rounded-md px-3"
						bind:value={first_name}
					/>
					<input
						type="text"
						placeholder="Last Name"
						class="w-full h-12 mt-4 rounded-md px-3"
						bind:value={last_name}
					/>
					<input
						type="text"
						placeholder="Email Address"
						class="w-full h-12 mt-4 rounded-md px-3"
						bind:value={email}
					/>
					<textarea
						placeholder="Message"
						class="w-full h-48 mt-4 rounded-md px-3 py-3"
						bind:value={message}
					/>
					<button
						class="w-full text-white bg-body-background-blue transition-bg-color transition-color hover:bg-colorstackuf-orange hover:text-black duration-300 py-4 px-7 rounded mt-4 font-gotham-medium"
						on:click={submitForm}>
						Submit
					</button>
				</div>
			</div>
		</div>
	</div>
</div>