<script lang="ts">
	import SponsorContainer from '$lib/components/sponsors/SponsorContainer.svelte';
	import Divider from '$lib/components/sponsors/Divider.svelte';

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
<div class="relative flex flex-col gap-12 bg-body-background-blue">
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
