<script lang="ts">
	import { type carouselImage } from '$lib/types';
	import Carousel from '$lib/components/carousel.svelte';
	import Pillar from '$lib/components/pillar.svelte';
	import Accordion from '$lib/components/accordion.svelte';

	const images: carouselImage[] = [
		{
			id: 'fdl1',
			src: '/nvidia-fdl/fdl1.jpg',
			alt: 'Image 1'
		},
		{
			id: 'fdl2',
			src: '/nvidia-fdl/fdl2.jpg',
			alt: 'Image 2'
		},
		{
			id: 'fdl3',
			src: '/nvidia-fdl/fdl3.jpg',
			alt: 'Image 3'
		},
		{
			id: 'fdl4',
			src: '/nvidia-fdl/fdl4.jpg',
			alt: 'Image 4'
		},
		{
			id: 'fdl5',
			src: '/nvidia-fdl/fdl5.jpg',
			alt: 'Image 5'
		}
	];

	const pillars = [
		{
			label: 'Community',
			description:
				'Find your life-long support system and experience a truly safe space for Black and Latinx CS students',
			icon: '/pillars/community.svg'
		},
		{
			label: 'Academic',
			description:
				'Get help with homework and advice in our Slack workspace and make friends with ColorStack members through social activities',
			icon: '/pillars/academic.svg'
		},
		{
			label: 'Career',
			description:
				'Submit your resume to our partner companies and apply to programs/events in collaboration with our partners',
			icon: '/pillars/career.svg'
		}
	];

	const bnyMellon = 'BNY Mellon';

	const sponsors = [
		{
			name: 'BNY Mellon',
			src: '/logos/bny-mellon.svg'
		},
		{
			name: 'Bloomberg',
			src: '/logos/bloomberg.svg'
		},
		{
			name: 'Capital One',
			src: '/logos/capital-one.svg'
		}
	];
</script>

<div class="mt-6">
	<!-- What We Do -->
	<div
		class="container grid grid-cols-1 tablet:grid-cols-2 gap-[40px] mt-12 tablet:gap-[20px] px-mobile-padding-x tablet:px-tablet-padding-x"
	>
		<div class="flex flex-col justify-center items-center">
			<h1 class="text-colorstackuf-blue text-[1.4rem] font-gotham-medium">WHAT WE DO</h1>
			<p
				class="text-white font-archer-book text-2xl tablet:text-4xl tablet:leading-[2.5rem] text-center mt-8"
			>
				ColorStack's mission is to increase the number of Black and Latinx Computer Science
				graduates that go on to start
				<em class="text-colorstackuf-orange">rewarding</em> techincal careers.
			</p>
			<a
				target="_blank"
				href="https://linktr.ee/colorstackuf"
				class="bg-colorstackuf-orange py-4 px-7 rounded-3xl mt-8 tablet:mt-16 font-gotham-medium"
			>
				Become a Chapter Member
			</a>
		</div>

		<Carousel {images} />
	</div>

	<!-- Pillars -->
	<div
		class="grid grid-cols-1 tablet:grid-cols-3 gap-[70px] mt-16 bg-body-background-white py-20 tablet:py-40 px-mobile-padding-x tablet:px-tablet-padding-x translate-y-[-110px] tablet:translate-y-[-130px]"
	>
		{#each pillars as pillar}
			<Pillar {...pillar} />
		{/each}
	</div>

	<!-- Sponsors -->
	<div
		class="translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:tablet-padding-x"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16">Our Sponsors</h2>
		<div
			class="grid grid-cols-1 gap-[50px] tablet:grid-cols-3 tablet:px-16 my-20 items-center justify-items-center"
		>
			{#each sponsors as sponsor}
				<img
					src={sponsor.src}
					alt={sponsor.name}
					width={225}
					height={100}
					class:bny-mellon={sponsor.name === bnyMellon}
				/>
			{/each}
		</div>
	</div>

	<!-- Follow Instagram -->
	<div
		class="translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:tablet-padding-x"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16">
			Follow our Instagram!
		</h2>
	</div>

	<!-- FAQ -->
	<div
		class="translate-y-[-110px] tablet:translate-y-[-130px] flex flex-col gap-y-6 px-mobile-padding-x tablet:tablet-padding-x"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16 mb-4">FAQs</h2>
		<Accordion>
			<span slot="head">
				<h3 class="text-black font-gotham-medium text-[1.1rem] tablet:text-[1.2rem]">
					What does ColorStack do?
				</h3>
			</span>
			<div slot="details">
				<p class="text-black text-base">Answer</p>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head">
				<h3 class="text-black font-gotham-medium text-[1.1rem] tablet:text-[1.2rem]">
					Do I have to be Black or Latinx to join?
				</h3>
			</span>
			<div slot="details">
				<p class="text-black text-base">Answer</p>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head">
				<h3 class="text-black font-gotham-medium text-[1.1rem] tablet:text-[1.2rem]">
					If I join ColorStack UF am I automatically in ColorStack National?
				</h3>
			</span>
			<div slot="details">
				<p class="text-black text-base">Answer</p>
			</div>
		</Accordion>
	</div>
</div>

<style>
	.bny-mellon {
		transform: translateY(-28px);
	}
</style>
