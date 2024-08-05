<script lang="ts">
    import type { carouselImage } from '$lib/types';

    const bloombergImages: carouselImage[] = [
        { id: 'Lab1', src: '/bloomberg/Lab1.jpeg', alt: 'Image 1' },
        { id: 'Lab2', src: '/bloomberg/Lab2.jpeg', alt: 'Image 2' },
        { id: 'Lab3', src: '/bloomberg/Lab3.jpeg', alt: 'Image 3' },
        { id: 'Lab4', src: '/bloomberg/Lab4.jpeg', alt: 'Image 4' },
        { id: 'Lab5', src: '/bloomberg/Lab5.jpeg', alt: 'Image 5' }
    ];
</script>

<!-- Bloomberg Images -->
<div class="flex overflow-x-auto py-5 no-scrollbar space-x-2.5">
    {#each bloombergImages as image}
        <div class="flex-none">
            <img src={image.src} alt={image.alt} class="h-32 tablet:h-64 object-cover rounded-lg" />
        </div>
    {/each}
</div>