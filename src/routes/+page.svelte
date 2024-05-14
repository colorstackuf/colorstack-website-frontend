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
	<div class="container grid grid-cols-2 gap-[20px] px-16">
		<div class="flex flex-col justify-center items-center">
			<h1 class="text-colorstackuf-blue text-[1.4rem] font-gotham-medium">WHAT WE DO</h1>
			<p class="text-white font-archer text-3xl text-center mt-8">
				ColorStack's mission is to increase the number of Black and Latinx Computer Science
				graduates that go on to start
				<em class="text-colorstackuf-orange">rewarding</em> techincal careers.
			</p>
			<a
				target="_blank"
				href="https://linktr.ee/colorstackuf"
				class="bg-colorstackuf-orange py-4 px-7 rounded-3xl mt-16 font-gotham-medium"
			>
				Become a Chapter Member
			</a>
		</div>

		<Carousel {images} />
	</div>

	<!-- Pillars -->
	<div
		class="grid grid-cols-3 gap-[70px] px-16 mt-16 bg-body-background-white py-40
	 translate-y-[-130px]
	 "
	>
		{#each pillars as pillar}
			<Pillar {...pillar} />
		{/each}
	</div>

	<!-- Sponsors -->
	<div class="translate-y-[-130px]">
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] px-16 mt-16">
			Our Sponsors
		</h2>
		<div class="grid grid-cols-3 px-16 my-20 items-center justify-items-center">
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
	<div class="translate-y-[-130px]">
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] px-16 mt-16">
			Follow our Instagram
		</h2>
	</div>

	<!-- FAQ -->
	<div class="translate-y-[-130px]">
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] px-16 mt-16">
			FAQs
			<Accordion>
				<span slot="head">
					<h3 class="text-black font-gotham-medium text-[1.2rem]">What does ColorStack do?</h3>
				</span>
				<div slot="details">
					<p class="text-black text-base">Answer</p>
				</div>
			</Accordion>
			<Accordion>
				<span slot="head">
					<h3 class="text-black font-gotham-medium text-[1.2rem]">
						Do I have to be Black or Latinx to join?
					</h3>
				</span>
				<div slot="details">
					<p class="text-black text-base">Answer</p>
				</div>
			</Accordion>
			<Accordion>
				<span slot="head">
					<h3 class="text-black font-gotham-medium text-[1.2rem]">
						If I join ColorStack UF am I automatically in ColorStack National?
					</h3>
				</span>
				<div slot="details">
					<p class="text-black text-base">Answer</p>
				</div>
			</Accordion>
		</h2>
	</div>
</div>

<style>
	.bny-mellon {
		transform: translateY(-28px);
	}
	.container > div:nth-child(1) {
		display: flex;
	}
</style>
