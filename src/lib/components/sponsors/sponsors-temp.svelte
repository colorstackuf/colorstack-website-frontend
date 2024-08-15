<script lang="ts">
	import SponsorContainer from '$lib/components/sponsors/SponsorContainer.svelte';
	import Divider from '$lib/components/sponsors/Divider.svelte';
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	onMount(setAnimations);

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
		}
	];

	const platinum = [
		{
			name: 'Bloomberg',
			src: '/sponsors/bloomberg.svg'
		},
		{
			name: 'BNY Mellon',
			src: '/sponsors/bny-mellon.svg'
		}
	];
	const gold = [
		{
			name: 'Capital One',
			src: '/sponsors/capital-one.svg'
		},
		{
			name: 'Cisco',
			src: '/sponsors/cisco.png'
		}
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
		<span slot="icon">
			<img src="/sponsors/tiers/platinum.svg" alt="Platinum" class="h-[30px] tablet:h-[40px]" />
		</span>
		{#each platinum as sponsor}
			<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[40px]" />
		{/each}
	</SponsorContainer>
	<Divider />

	<!-- Gold Sponsors -->
	<SponsorContainer title="Gold">
		<span slot="icon">
			<img src="/sponsors/tiers/gold.svg" alt="Gold" class="h-[30px] tablet:h-[40px]" />
		</span>
		{#each gold as sponsor}
			<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[36px]" />
		{/each}
	</SponsorContainer>
	<Divider />

	<!-- Silver Sponsors -->
	<SponsorContainer title="Silver">
		<span slot="icon">
			<img src="/sponsors/tiers/silver.svg" alt="Silver" class="h-[30px] tablet:h-[40px]" />
		</span>
		{#each silver as sponsor}
			<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[36px]" />
		{/each}
	</SponsorContainer>
	<Divider />

	<!-- Founding Sponsors -->
	<SponsorContainer title="Founding">
		<span slot="icon">
			<img src="/torch.svg" alt="Torch" class="h-[30px] tablet:h-[40px]" />
		</span>
		{#each founding as sponsor}
			<img src={sponsor.src} alt={sponsor.name} class="h-[20px] tablet:h-[36px]" />
		{/each}
	</SponsorContainer>
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
