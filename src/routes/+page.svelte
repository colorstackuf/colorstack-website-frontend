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
		},
		{
			name: 'Cisco',
			src: '/logos/cisco.png'
		}
	];

	let sponsorSize = 200;
	$: innerWidth = 0;
	$: {
		if (innerWidth >= 768) {
			sponsorSize = 160;
		} else if (innerWidth >= 640) {
			sponsorSize = 120;
		} else {
			sponsorSize = 200;
		}
	}
</script>

<svelte:window bind:innerWidth />
<!-- <div class="mt-6 justify-center"> -->
<div
	class="mt-6 justify-center laptop:grid laptop:grid-cols-[1fr_1536px_1fr] bg-body-background-blue"
>
	<!-- What We Do -->
	<div
		class="grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 mt-12 laptop:mt-0 gap-[60px] tablet:gap-[70px] laptop:gap-[20px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:max-h-[600px] laptop:min-h-[550px]"
	>
		<div class="flex flex-col justify-center laptop:justify-normal laptop:mt-20 items-center">
			<h1 class="text-colorstackuf-blue text-[1.4rem] font-gotham-medium">WHAT WE DO</h1>
			<p
				class="text-white font-archer-book text-2xl tablet:text-4xl tablet:leading-[2.5rem] max-w-[500px] text-center mt-8"
			>
				ColorStack's mission is to increase the number of Black and Latinx Computer Science
				graduates that go on to start
				<em class="text-colorstackuf-orange">rewarding</em> techincal careers.
			</p>
			<a
				target="_blank"
				href="https://linktr.ee/colorstackuf"
				class="bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium"
			>
				Become a Chapter Member
			</a>
		</div>

		<Carousel {images} />
	</div>

	<!-- Pillars -->
	<div
		class="laptop:col-start-1 laptop:col-end-4 mt-16 bg-body-background-white py-20 tablet:py-36 notebook:py-40 px-mobile-padding-x tablet:px-tablet-padding-x translate-y-[-110px] tablet:translate-y-[-130px] laptop:flex laptop:justify-center"
	>
		<div class="max-w-page-width grid grid-cols-1 tablet:grid-cols-3 gap-[70px] tablet:gap-[40px]">
			{#each pillars as pillar}
				<Pillar {...pillar} />
			{/each}
		</div>
	</div>

	<!-- Sponsors -->
	<div
		class="laptop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:tablet-padding-x"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16">Our Sponsors</h2>
		<div
			class="grid grid-cols-1 gap-[50px] tablet:grid-cols-4 tablet:px-16 my-20 items-center justify-items-center"
		>
			{#each sponsors as sponsor}
				<img
					src={sponsor.src}
					alt={sponsor.name}
					width={sponsorSize}
					height={sponsorSize}
					class={sponsor.name === bnyMellon
						? 'translate-y-[-28px] tablet:translate-y-[-15px] notebook:translate-y-[-19px]'
						: ''}
				/>
			{/each}
		</div>
	</div>

	<!-- Follow Instagram -->
	<div
		class="laptop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:px-tablet-padding-x"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16">
			Follow our Instagram!
		</h2>
	</div>

	<!-- FAQ -->
	<div
		class="col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] flex flex-col gap-y-6 px-mobile-padding-x tablet:px-tablet-padding-x"
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
