<script>
	import { onMount } from 'svelte';

	let eboard_members = [
		{
			name: 'Carson Johnson',
			position: 'President',
			image: 'e-board/Carson_Johnson.png'
		},
		{
			name: 'Gabriel Castejon',
			position: 'Vice President',
			image: 'e-board/Gabriel_Castejon.png'
		},
		{
			name: 'Yakub Mungai',
			position: 'Treasurer',
			image: 'e-board/Yakub_Mungai.png'
		},
		{
			name: 'Kacie Ross',
			position: 'VP of Marketing',
			image: 'e-board/Kacie_Ross.png'
		},
		{
			name: 'Bryan Hernandez-Sanchez',
			position: 'VP of Events',
			image: 'e-board/Bryan_Hernandez-Sanchez.png'
		},
		{
			name: 'Yohance de Souza',
			position: 'Administration Chair',
			image: 'e-board/Yohance_de_Souza.png'
		},
		{
			name: 'Mya Ramsey',
			position: 'Physical Marketing Coordinator',
			image: 'e-board/Mya_Ramsey.png'
		},
		{
			name: 'Soraya Sardine',
			position: 'Graphic Design Coordinator',
			image: 'e-board/Soraya_Sardine.png'
		},
		// {
		//     "name": "Natahja Graddy",
		//     "position": "Community Events Coordinator",
		//     "image": "e-board/Natahja_Graddy.png"
		// },
		{
			name: 'Yonas Worku',
			position: 'Career Events Coordinator',
			image: 'e-board/Yonas_Worku.png'
		},
		{
			name: 'Matthew DeGuzman',
			position: 'Technical Events Coordinator',
			image: 'e-board/Matthew_DeGuzman.png'
		},
		{
			name: 'Alex Huper',
			position: 'Academic Programs Coordinator',
			image: 'e-board/Alex_Huper.png'
		},
		{
			name: 'Josue Vicente',
			position: 'Academic Events Coordinator',
			image: 'e-board/Josue_Vicente.png'
		},
		{
			name: 'Abigail Erefah',
			position: 'Digital Marketing Coordinator',
			image: 'e-board/Abigail_Erefah.png'
		},
		{
			name: 'Dr. Sanethia Thomas',
			position: 'Faculty Advisor',
			image: 'e-board/Sanethia_Thomas.png'
		}
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

		// Ask team if this is the correct way to handle the response
		if (response.ok) {
			alert('Email sent successfully');
		} else {
			alert('Failed to send email');
		}
	}
</script>

<div class="bg-body-background-white">
	<!-- ColorStack UF intro -->
	<div class="h-[40rem] laptop:h-auto">
		<div
			class="relative flex flex-col items-end laptop:items-start bg-[url('graphics/about-intro.png')] bg-cover bg-no-repeat bg-center h-[25rem] laptop:h-[45rem]"
		>
			<div
				class="relative grid grid-cols-1 top-[16rem] laptop:top-0 laptop:left-[3rem] laptop:top-[5rem] z-10 bg-body-background-blue pl-7 pr-4 py-7 laptop:p-12 rounded-l-lg laptop:rounded-lg mb-12 w-11/12 min-w-[310px] h-[380px] laptop:w-[460px] laptop:h-auto"
			>
				<h1
					class="text-white text-lg tablet:text-2xl laptop:text-3xl font-gotham-medium laptop:pb-4"
				>
					ColorStack UF is a team committed to...
				</h1>
				<p class="text-white font-archer text-lg tablet:text-xl leading-6 self-start">
					Investing in the futures of those left behind every day. We’re a tech student organization
					cultivating the strongest campus community of its kind to deliver community building,
					academic support, and career development opportunities.
				</p>
				<!-- Need to change to standard -->
				<a href="https://linktr.ee/colorstackuf" target="_blank" class="self-end laptop:self-start">
					<div
						class="text-black w-44 text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-3 px-7 rounded-3xl mt-8 font-gotham-medium"
					>
						View Link Tree
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- About ColorStack National -->
	<div class="laptop:bg-body-background-white bg-body-background-blue laptop:py-40 py-6 px-8">
		<div class="bg-body-background-blue rounded-lg laptop:p-16">
			<div class="relative grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 gap-x-12">
				<img src="graphics/colorstack_students.png" alt="People" class="w-full rounded-lg" />

				<div class="flex flex-col items-center text-center">
					<h1 class="text-white text-xl laptop:text-4xl pt-8 font-gotham-medium pb-4 laptop:pb-12">
						About ColorStack National
					</h1>
					<p class="text-white font-archer text-lg">
						The ColorStack Family is our community of 10,000+ Black and Latinx Computer Science
						students from 900+ schools nationwide. We’re committed to providing community building,
						academic support, and career development year-round through our active Slack channel,
						monthly Fam Fridays, and partnerships with 70+ top tech companies.
					</p>
					<!-- Need to change to standard -->
					<button
						class="text-black text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium"
						>Become a National Member</button
					>
				</div>
			</div>
		</div>
	</div>

	<!-- Eboard Grid -->
	<div class="bg-body-background-blue py-12 laptop:px-12 px-6">
		<div class="flex flex-col justify-center items-center font-gotham-medium pb-12">
			<h1 class="text-white text-[2rem] text-center">Meet the E-Board</h1>
			<p class="text-white text-center pt-3">2023-2024</p>
		</div>
		<div class="grid grid-cols-2 laptop:grid-cols-4 laptop:col-start-2 col-span-5 gap-x-7 gap-y-12">
			{#each eboard_members as member}
				<div
					class="grid grid-cols-1 justify-items-center items-center text-white text-[1.4rem] font-gotham-medium"
				>
					<img
						src={member.image}
						alt="Photo of {member.name}"
						class="self-start w-48 h-48 tablet:w-64 tablet:h-64 laptop:w-80 laptop:h-80 object-cover rounded-md"
					/>
					<h1 class="py-2 text-base text-center laptop:text-2xl">{member.name}</h1>
					<p class="text-xs text-center laptop:text-base">{member.position}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Contact Us -->
	<div class="bg-body-background-light-blue laptop:px-24 laptop:py-36 py-12 px-12 mb-7">
		<div class="grid grid-cols-1 laptop:grid-cols-2 laptop:cols-start-2">
			<div class="text-black">
				<!-- Need to ask team on what sizes these should be (Are there ones for this part specifically?) -->
				<h1 class="text-3xl pb-8 font-gotham-medium">Contact Us</h1>
				<p class="text-2xl font-archer">
					If you have any questions or concerns don't hesitate to contact us!
				</p>
			</div>

			<div class="justify-center items-center w-full font-archer">
				<input
					type="text"
					placeholder="First Name"
					class="w-full h-12 mt-4 rounded-md px-3 text-[#767676]"
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
				<!-- Need to ask team on what color the button transition should be -->
				<button
					class="w-full text-white bg-body-background-blue transition-bg-color transition-color hover:bg-colorstackuf-orange hover:text-black duration-300 py-4 px-7 rounded mt-4 font-gotham-medium"
					on:click={submitForm}>Submit</button
				>
			</div>
		</div>
	</div>
</div>
