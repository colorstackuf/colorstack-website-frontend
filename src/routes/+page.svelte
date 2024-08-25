<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import { type carouselImage } from '$lib/types';
	import Carousel from '$lib/components/Carousel.svelte';
	import Pillar from '$lib/components/Pillar.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import Sponsors from '$lib/components/sponsors/Sponsors.svelte';
	import Instagram from '$lib/components/Instagram.svelte';
	import { setAnimations } from '$lib/utils';

	export let data: PageServerData;

	const images: carouselImage[] = [
		{
			id: 'gbm0',
			src: '/nvidia-fdl/img0.jpg',
			alt: 'ColorStack GBM 1'
		},
		{
			id: 'fdl1',
			src: '/nvidia-fdl/fdl1.jpg',
			alt: 'Nvidia Fundamentals of Deep learning Workshop'
		},
		{
			id: 'fdl2',
			src: '/nvidia-fdl/fdl2.jpg',
			alt: 'Nvidia Fundamentals of Deep learning Workshop'
		},
		{
			id: 'fdl3',
			src: '/nvidia-fdl/fdl3.jpg',
			alt: 'Nvidia Fundamentals of Deep learning Workshop'
		},
		{
			id: 'fdl4',
			src: '/nvidia-fdl/fdl4.jpg',
			alt: 'Nvidia Fundamentals of Deep learning Workshop'
		},
		{
			id: 'fdl5',
			src: '/nvidia-fdl/fdl5.jpg',
			alt: 'Nvidia Fundamentals of Deep learning Workshop'
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

	onMount(setAnimations);
</script>

<div
	class="mt-6 justify-center lg-desktop:grid lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-blue overflow-hidden"
>
	<!-- What We Do -->
	<section
		class="grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 mt-12 laptop:mt-0 gap-[60px] tablet:gap-[70px] laptop:gap-[20px] laptop:max-h-[600px] laptop:min-h-[550px] laptop:justify-items-end padding min-[1150px]:px-[50px] desktop:px-[30px]"
	>
		<div
			class="slides-in flex flex-col justify-center laptop:justify-normal laptop:mt-20 desktop:mt-28 items-center laptop:justify-self-center"
		>
			<h1 class="text-colorstackuf-blue text-[1.4rem] font-gotham-medium">WHAT WE DO</h1>
			<p
				class="text-white font-archer-book text-2xl tablet:text-4xl tablet:leading-[2.5rem] max-w-[500px] text-center mt-8"
			>
				ColorStack's mission is to increase the number of Black and Latinx Computer Science
				graduates that go on to start
				<em class="text-colorstackuf-orange">rewarding</em> technical careers.
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
	</section>

	<!-- Pillars -->
	<section
		class="padding tablet:col-start-1 tablet:col-end-4 mt-16 bg-body-background-white py-20 tablet:py-36 notebook:py-40 translate-y-[-110px] tablet:translate-y-[-130px] laptop:flex laptop:justify-center desktop:translate-y-[-40px]"
	>
		<div class="max-w-page-width grid grid-cols-1 tablet:grid-cols-3 gap-[70px] tablet:gap-[40px]">
			{#each pillars as pillar}
				<Pillar {...pillar} />
			{/each}
		</div>
	</section>

	<!-- Sponsors -->
	<section
		class="padding lg-desktop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] desktop:translate-y-[-40px]"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16 mb-8">Our Sponsors</h2>
		<Sponsors />
	</section>

	<!-- Follow Instagram -->
	<section
		class="padding slides-in lg-desktop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] desktop:translate-y-[-40px]"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16 mb-8">
			Follow our Instagram!
		</h2>
		<Instagram data={data.instagramData} />
	</section>

	<!-- FAQ -->
	<section
		class="padding slides-in lg-desktop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] flex flex-col gap-y-6 desktop:translate-y-[-40px] desktop:mb-24"
	>
		<h2 class="text-colorstackuf-blue font-gotham-medium text-[1.4rem] mt-16 mb-4">FAQs</h2>
		<Accordion>
			<span slot="head">
				<h3 class="text-black font-gotham-medium text-[1.1rem] leading-5 tablet:text-[1.2rem]">
					What does ColorStack do?
				</h3>
			</span>
			<div slot="details">
				<p class="text-black text-base font-archer">
					Increase the number of Black & Latinx computer science students that start rewarding
					technical careers.
				</p>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head">
				<h3 class="text-black font-gotham-medium text-[1.1rem] leading-5 tablet:text-[1.2rem]">
					Do I have to be Black or Latinx to join?
				</h3>
			</span>
			<div slot="details">
				<p class="text-black text-base font-archer">
					While you must be Black or Latinx to become a member of the national organization, the
					chapter is open to everyone that is committed to our mission.
				</p>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head">
				<h3 class="text-black font-gotham-medium text-[1.1rem] leading-5 tablet:text-[1.2rem]">
					If I join ColorStack UF am I automatically in ColorStack National?
				</h3>
			</span>
			<div slot="details">
				<p class="text-black text-base font-archer">
					No, you still need to apply to become a member of the ColorStack national chapter at <a
						href="https://colorstack.org/"
						class="decoration-solid decoration-2 decoration-colorstackuf-blue underline underline-offset-4 hover:decoration-colorstackuf-orange transition-color duration-300"
						target="_blank">www.colorstack.org.</a
					>
				</p>
			</div>
		</Accordion>
	</section>
</div>

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
