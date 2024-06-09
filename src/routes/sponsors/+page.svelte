<script lang="ts">
	import Sponsors from '$lib/components/sponsors.svelte';

	import { type carouselImage } from '$lib/types';

	const bloombergImages: carouselImage[] = [
		{ id: 'Lab1', src: '/bloomberg/Lab1.jpeg', alt: 'Image 1' },
		{ id: 'Lab2', src: '/bloomberg/Lab2.jpeg', alt: 'Image 2' },
		{ id: 'Lab3', src: '/bloomberg/Lab3.jpeg', alt: 'Image 3' },
		{ id: 'Lab4', src: '/bloomberg/Lab4.jpeg', alt: 'Image 4' },
		{ id: 'Lab5', src: '/bloomberg/Lab5.jpeg', alt: 'Image 5' }
	];

	const nvidiaImages: carouselImage[] = [
		{ id: 'fdl1', src: '/nvidia-fdl/fdl1.jpg', alt: 'Image 1' },
		{ id: 'fdl2', src: '/nvidia-fdl/fdl2.jpg', alt: 'Image 2' },
		{ id: 'fdl3', src: '/nvidia-fdl/fdl3.jpg', alt: 'Image 3' },
		{ id: 'fdl4', src: '/nvidia-fdl/fdl4.jpg', alt: 'Image 4' },
		{ id: 'fdl5', src: '/nvidia-fdl/fdl5.jpg', alt: 'Image 5' }
	];

	let descriptions = [
		{
			title: 'TALENT ACQUISITION',
			content:
				'Get your university opportunities in front of the community of Black & Latinx Computer Science students at The University of Florida.'
		},
		{
			title: 'RACIAL EQUITY',
			content:
				'Help us further our mission and level the playing field for all Computer Science majors at The University of Florida.'
		},
		{
			title: 'TALENT DEVELOPMENT',
			content:
				'Meet our members where they are to prepare them for success in the classroom, the interview process, and in the workplace.'
		}
	];
</script>

<div
	class="pt-4 mt-2 justify-center lg-desktop:grid lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-white mb-5"
>
        <!-- Sponsors -->
    <div
        class="lg-desktop:col-start-2 px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x"
        >
        <h2
            class="text-body-background-blue font-gotham-medium text-[1.7rem] tablet:text-[2rem] mb-10 text-center tablet:text-left"
        >
            Our Sponsors
        </h2>
        <div class="ml-0 tablet:ml-0 lg:ml-0">
            <Sponsors />
        </div>
    </div>


	<!-- Sponsored Events -->
	<div
		class="lg-desktop:col-start-2 px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x"
	>
		<h2
			class="text-body-background-blue font-gotham-medium text-[1.5rem] tablet:text-[2rem] mt-20 mb-10 text-center tablet:text-left"
		>
			Sponsored Events
		</h2>

		<h2 class="text-colorstackuf-blue font-archer-book text-[1.7rem] mt-10">Bloomberg Tech Lab</h2>
		<!-- Bloomberg Tech Lab -->
		<div class="flex overflow-x-auto py-5 no-scrollbar space-x-2.5">
			{#each bloombergImages as image}
				<div class="flex-none">
					<img src={image.src} alt={image.alt} class="h-32 tablet:h-64 object-cover rounded-lg" />
				</div>
			{/each}
		</div>

		<h2 class="text-colorstackuf-blue font-archer-book text-[1.7rem] mt-10">
			Nvidia x Colorstack UF
		</h2>
		<!-- Nvidia x Colorstack UF -->
		<div class="flex overflow-x-auto py-5 no-scrollbar space-x-2.5">
			{#each nvidiaImages as image}
				<div class="flex-none">
					<img src={image.src} alt={image.alt} class="h-32 tablet:h-64 object-cover rounded-lg" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Why Support Colorstack UF -->
    <div
	class="tablet:col-start-1 tablet:col-end-4 mt-16 bg-body-background-light-blue py-10 tablet:py-24 px-mobile-padding-x tablet:px-tablet-padding-x laptop:flex laptop:justify-center laptop:px-laptop-padding-x pb-20"
>
	<div class="max-w-page-width w-full text-center">
		<h2
			class="font-gotham-medium text-font-color-dark-blue text-center text-[1.5rem] tablet:text-4xl mb-20"
		>
			Why should you support ColorStack UF?
		</h2>
		<div
			class="max-w-page-width grid grid-cols-1 tablet:grid-cols-3 gap-[70px] tablet:gap-[40px]"
		>
			{#each descriptions as { title, content }}
				<div class="flex flex-col items-center">
					<h3 class="font-gotham-medium text-xl tablet:text-2xl text-font-color-dark-blue mb-4">
						{title}
					</h3>
					<p class="font-archer text-center text-xl">{content}</p>
				</div>
			{/each}
		</div>
        <div
        class="flex justify-center mt-8 tablet:mt-10 laptop:mt-3 desktop:mt-3 items-center laptop:justify-self-center ipad-pro:mt-0"
      >
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdP6MhOXXjmgDYIJHjqef6MQSPa9xnBdr1SZzhVvqYJvksYMA/viewform"
          class="bg-body-background-blue text-body-background-light-blue transition-bg-color transition-color hover:bg-colorstackuf-orange hover:text-body-background-blue duration-300 py-4 px-7 rounded-3xl mt-4 laptop:mt-12 ipad-pro:mt-2 font-gotham-medium"
        >
          Support Us
        </a>
      </div>
      
	</div>
</div>

	<!-- Our LinkedIn -->

</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>