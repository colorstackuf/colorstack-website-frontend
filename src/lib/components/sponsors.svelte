<script lang="ts">
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

<!-- Sponsors -->
<svelte:window bind:innerWidth />
<div
	class="laptop:col-start-2 translate-y-[-110px] tablet:translate-y-[-130px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x desktop:translate-y-[-40px]"
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
