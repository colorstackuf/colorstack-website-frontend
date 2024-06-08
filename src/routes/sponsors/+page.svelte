<style>
    .no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>


<script lang="ts">
	import Sponsors from '$lib/components/sponsors.svelte';

    import { type carouselImage } from '$lib/types';

    const bloombergImages: carouselImage[] = [
    { id: 'fdl1', src: '/nvidia-fdl/fdl1.jpg', alt: 'Image 1' },
    { id: 'fdl2', src: '/nvidia-fdl/fdl2.jpg', alt: 'Image 2' },
    { id: 'fdl3', src: '/nvidia-fdl/fdl3.jpg', alt: 'Image 3' },
    { id: 'fdl4', src: '/nvidia-fdl/fdl4.jpg', alt: 'Image 4' },
    { id: 'fdl5', src: '/nvidia-fdl/fdl5.jpg', alt: 'Image 5' }
    ];

    const nvidiaImages: carouselImage[] = [
    { id: 'fdl1', src: '/nvidia-fdl/fdl1.jpg', alt: 'Image 1' },
    { id: 'fdl2', src: '/nvidia-fdl/fdl2.jpg', alt: 'Image 2' },
    { id: 'fdl3', src: '/nvidia-fdl/fdl3.jpg', alt: 'Image 3' },
    { id: 'fdl4', src: '/nvidia-fdl/fdl4.jpg', alt: 'Image 4' },
    { id: 'fdl5', src: '/nvidia-fdl/fdl5.jpg', alt: 'Image 5' }
    ];

    

    let descriptions: string[];
    descriptions = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut neque eget tellus blandit sollicitudin id ac risus. Vivamus erat arcu, ornare sed dolor eu, viverra placerat tellus. Quisque maximus eget sapien sed aliquam. Suspendisse vitae nisi ac",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut neque eget tellus blandit sollicitudin id ac risus. Vivamus erat arcu, ornare sed dolor eu, viverra placerat tellus. Quisque maximus eget sapien sed aliquam. Suspendisse vitae nisi ac",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut neque eget tellus blandit sollicitudin id ac risus. Vivamus erat arcu, ornare sed dolor eu, viverra placerat tellus. Quisque maximus eget sapien sed aliquam. Suspendisse vitae nisi ac"
	];
</script>



<div class="mt-6 justify-center lg-desktop:grid lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-white">
    
	<!-- Sponsors -->
    <div class="lg-desktop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x desktop:translate-y-[-40px]"> 
        <h2 class="text-body-background-blue font-gotham-medium text-[2rem] mt-20 mb-10">Our Sponsors</h2>
        <Sponsors />
    </div>

    <!-- Sponsored Events -->
    <div
    class="lg-desktop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x desktop:translate-y-[-40px]"
    >
        <h2 class="text-body-background-blue font-gotham-medium text-[2rem] mt-20 mb-10">Sponsored Events</h2>

        <h2 class="text-colorstackuf-blue font-archer-book text-[1.7rem] mt-10">Bloomberg Tech Lab</h2>
        <!-- Bloomberg Tech Lab -->
		<div class="flex overflow-x-auto py-5 no-scrollbar space-x-2.5">
			{#each bloombergImages as image}
				<div class="flex-none">
					<img src={image.src} alt={image.alt} class="h-64 object-cover rounded-lg" />
				</div>
			{/each}
		</div>
    
        <h2 class="text-colorstackuf-blue font-archer-book text-[1.7rem] mt-10">Nvidia x Colorstack UF</h2>
        <!-- Nvidia x Colorstack UF -->
		<div class="flex overflow-x-auto py-5 no-scrollbar space-x-2.5">
			{#each nvidiaImages as image}
				<div class="flex-none">
					<img src={image.src} alt={image.alt} class="h-64 object-cover rounded-lg" />
				</div>
			{/each}
		</div>
    </div>

    <!-- Why Support Colorstack UF -->
    <div class="tablet:col-start-1 tablet:col-end-4 mt-16 bg-body-background-light-blue py-10 tablet:py-24 px-mobile-padding-x tablet:px-tablet-padding-x translate-y-[-110px] tablet:translate-y-[-130px] laptop:flex laptop:justify-center laptop:px-laptop-padding-x desktop:translate-y-[-40px] pb-20">
        <div class="max-w-page-width w-full text-center">
            <h2 class="font-gotham-medium text-font-color-dark-blue text-center text-4xl mb-20">Why should you support ColorStack UF?</h2>
            <div class="max-w-page-width grid grid-cols-1 tablet:grid-cols-3 gap-[70px] tablet:gap-[40px]">
                {#each descriptions as description}
                    <div class="flex flex-col items-center">
                        <p class="font-archer text-center text-xl">{description}</p>
                    </div>
                {/each}
            </div>
            <div class="flex justify-center laptop:mt-3 desktop:mt-7 items-center laptop:justify-self-center">
                <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdP6MhOXXjmgDYIJHjqef6MQSPa9xnBdr1SZzhVvqYJvksYMA/viewform"
                    class="bg-body-background-blue text-body-background-light-blue transition-bg-color transition-color hover:bg-colorstackuf-orange hover:text-body-background-blue duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium"
                >
                    Support Us
                </a>
            </div>
        </div>
    </div>

    <!-- Our LinkedIn -->
    <div class="tablet:col-start-1 tablet:col-end-4 mt-0 bg-body-background-blue py-10 tablet:py-24 px-mobile-padding-x tablet:px-tablet-padding-x translate-y-[-110px] tablet:translate-y-[-130px] laptop:flex laptop:px-laptop-padding-x desktop:translate-y-[-40px] pb-20">
        <h2 class="text-white font-gotham-medium text-[2rem] mt-0 mb-20">Our LinkedIn</h2>
    </div>

</div>

 