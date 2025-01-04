<script lang="ts">
	import SponsorContainer from '$lib/components/sponsors/SponsorContainer.svelte';
	import Divider from '$lib/components/sponsors/Divider.svelte';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	onMount(() => {
		const animations = setAnimations();
		return () => animations.disconnect();
	});

	const founding = [
		{
			name: 'Bloomberg',
			src: '/sponsors/bloomberg.svg'
		},
		{
			name: 'BNY Mellon',
			src: '/sponsors/bny-mellon.svg'
		},
		{
			name: 'Capital One',
			src: '/sponsors/capital-one.svg'
		},
	];

	const platinum = [
		{
			name: 'Bloomberg',
			src: '/sponsors/bloomberg.svg'
		},
		{
			name: 'BNY Mellon',
			src: '/sponsors/bny-mellon.svg'
		},
		{
			name: 'Nvidia',
			src: '/sponsors/nvidia.svg'
		},
	];

	const gold = [
		{
			name: 'Capital One',
			src: '/sponsors/capital-one.svg'
		},
		{
			name: 'Cisco',
			src: '/sponsors/cisco.png'
		},
		{
			name: 'SEO',
			src: '/sponsors/seo.png'
		},
		{
			name: 'Next Era',
			src: '/sponsors/next-era.svg'
		},
		{
			name: 'Raymond James',
			src: '/sponsors/raymond-james.svg'
		},
	];

	const silver = [
		{
			name: 'UKG',
			src: '/sponsors/ukg.png'
		}
	];
</script>

<!-- Sponsors -->
<div class="slides-in relative flex flex-col gap-12 bg-body-background-blue">
	<!-- Platinum Sponsors -->
	<SponsorContainer title="Platinum">
		{#snippet icon()}
				<span >
				<img src="/sponsors/tiers/platinum.svg" alt="Platinum" class="h-[30px] tablet:h-[40px]" />
			</span>
			{/snippet}
		{#each platinum as sponsor}
			{#if sponsor.name === 'Nvidia'}
			<img src={sponsor.src} alt={sponsor.name} class="h-[35px] tablet:h-[60px]" />
			{:else}
			<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[40px]" />
			{/if}
		{/each}
	</SponsorContainer>
	<Divider />

	<!-- Gold Sponsors -->
	<SponsorContainer title="Gold">
		{#snippet icon()}
				<span >
				<img src="/sponsors/tiers/gold.svg" alt="Gold" class="h-[30px] tablet:h-[40px]" />
			</span>
			{/snippet}
		{#each gold as sponsor}
			{#if sponsor.name === 'Raymond James'}
				<img src={sponsor.src} alt={sponsor.name} class="h-[12px] tablet:h-[20px]" />
			{:else if sponsor.name === 'Next Era'}
				<img src={sponsor.src} alt={sponsor.name} class="h-[28px] tablet:h-[44px]" />
			{:else if sponsor.name === 'Capital One'}
				<img src={sponsor.src} alt={sponsor.name} class="h-[24px] tablet:h-[40px]" />
			{:else if sponsor.name === 'Cisco'}
				<img src={sponsor.src} alt={sponsor.name} class="h-[26px] tablet:h-[44px]" />
			{:else}
				<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[36px]" />
			{/if}
		{/each}
	</SponsorContainer>
	<Divider />

	<!-- Silver Sponsors -->
	<SponsorContainer title="Silver">
		{#snippet icon()}
				<span >
				<img src="/sponsors/tiers/silver.svg" alt="Silver" class="h-[30px] tablet:h-[40px]" />
			</span>
			{/snippet}
		{#each silver as sponsor}
			<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[36px]" />
		{/each}
	</SponsorContainer>
	<Divider />

	<!-- Founding Sponsors -->
	<SponsorContainer title="Founding">
		{#snippet icon()}
				<span >
				<img src="/torch.svg" alt="Torch" class="h-[30px] tablet:h-[40px]" />
			</span>
			{/snippet}
		{#each founding as sponsor}
			{#if sponsor.name === 'Capital One'}
				<img src={sponsor.src} alt={sponsor.name} class="h-[24px] tablet:h-[40px]" />
			{:else}
				<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[36px]" />
			{/if}
		{/each}
	</SponsorContainer>
</div>
