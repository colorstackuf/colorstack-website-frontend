<script lang="ts">
	import Sponsors from '$lib/components/sponsors/Sponsors.svelte';
	import BloombergImages from '$lib/components/Bloomberg.svelte';
	import NvidiaImages from '$lib/components/Nvidia.svelte';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	onMount(setAnimations);

	let descriptions = [
		{
			title: 'TALENT ACQUISITION',
			content:
				'Get exceptional university opportunities from the strongest community of Black & Latinx students at the University of Florida.'
		},
		{
			title: 'RACIAL EQUITY',
			content:
				'Help us further our mission and level the playing field for all Computer Science and related majors at the University of Florida.'
		},
		{
			title: 'TALENT DEVELOPMENT',
			content:
				'Meet our members to simulataneously prepare them for success in the classroom, interview process, and workplace.'
		}
	];
</script>

<svelte:head>
	<title>ColorStack UF | Sponsors</title>
</svelte:head>

<div
	class="pt-20 justify-center overflow-x-hidden lg-desktop:grid lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-white mb-5"
>
	<!-- Sponsors -->
	<section class="lg-desktop:col-start-2 padding">
		<h2
			class="text-body-background-blue font-gotham-medium text-[1.7rem] tablet:text-[2rem] mb-10 text-center tablet:text-left"
		>
			Our Sponsors
		</h2>
		<div
			class="ml-0 tablet:ml-0 lg:ml-0 bg-body-background-blue p-8 tablet:p-12 laptop:p-16 rounded-lg"
		>
			<Sponsors />
		</div>
	</section>

	<!-- Sponsored Events -->
	<section class="lg-desktop:col-start-2 padding">
		<h2
			class="text-body-background-blue font-gotham-medium text-[1.5rem] tablet:text-[2rem] mt-20 mb-10 text-center tablet:text-left"
		>
			Sponsored Events
		</h2>

		<h2 class="text-colorstackuf-blue font-archer-book text-[1.7rem] mt-10">Bloomberg Tech Lab</h2>
		<BloombergImages />

		<h2 class="text-colorstackuf-blue font-archer-book text-[1.7rem] mt-10">
			Nvidia x Colorstack UF
		</h2>
		<NvidiaImages />
	</section>

	<!-- Why Support Colorstack UF -->
	<section
		class="tablet:col-start-1 tablet:col-end-4 mt-16 bg-body-background-light-blue py-10 tablet:py-24 laptop:flex laptop:justify-center pb-20"
	>
		<div class="max-w-page-width w-full text-center padding">
			<h2
				class="slides-in font-gotham-medium text-font-color-dark-blue text-center text-[1.5rem] tablet:text-4xl mb-20"
			>
				Why should you support ColorStack UF?
			</h2>
			<div
				class="max-w-page-width px-2 grid grid-cols-1 tablet:grid-cols-3 gap-[70px] tablet:gap-[40px]"
			>
				{#each descriptions as { title, content }}
					<div class="slides-in flex flex-col items-center">
						<h3 class="font-gotham-medium text-xl tablet:text-2xl text-font-color-dark-blue mb-4">
							{title}
						</h3>
						<p class="font-archer text-center text-xl">{content}</p>
					</div>
				{/each}
			</div>
			<div class="flex justify-center mt-20 items-center laptop:justify-self-center">
				<a
					target="_blank"
					href="https://docs.google.com/forms/d/e/1FAIpQLSdP6MhOXXjmgDYIJHjqef6MQSPa9xnBdr1SZzhVvqYJvksYMA/viewform"
					class="slides-in bg-body-background-blue text-body-background-light-blue transition-bg-color transition-color hover:bg-colorstackuf-orange hover:text-body-background-blue duration-300 py-4 px-7 rounded-3xl font-gotham-medium"
				>
					Support Us
				</a>
			</div>
		</div>
	</section>

	<!-- Our LinkedIn -->
</div>
