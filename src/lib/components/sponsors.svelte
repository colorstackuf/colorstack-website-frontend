<script lang="ts">
	const bnyMellon = 'BNY Mellon';

	const platinum = [
		{
			name: 'BNY Mellon',
			src: '/logos/bny-mellon.svg'
		},
		{
			name: 'Bloomberg',
			src: '/logos/bloomberg.svg'
		}
	];
	const gold = [
		{
			name: 'Capital One',
			src: '/logos/capital-one.svg'
		},
		{
			name: 'Cisco',
			src: '/logos/cisco.png'
		}
	];

	const sponsorSize = 200;
</script>

<!-- Sponsors -->
<div class="flex flex-col gap-12">

	<!-- blue background for sponsor images -->
	<div class="bg-body-background-blue p-8 rounded-lg ml-0.5 mr-0.5"> <!-- added blue background -->

		<!-- Platinum Sponsors -->
		<div class="flex flex-col gap-16 ml-2">
			<div class="flex flex-row gap-2">
				<img src="/ribbon.svg" alt="Ribbon" />
				<h2 class="text-colorstackuf-blue font-archer-book text-2xl">Platinum</h2>
			</div>

			<div class="flex flex-col tablet:flex-row tablet:justify-start items-center justify-center gap-8 tablet:ml-6">
				{#each platinum as sponsor}
					<img
						src={sponsor.src}
						alt={sponsor.name}
						width={sponsorSize}
						height={sponsorSize}
						class={sponsor.name === bnyMellon ? 'translate-y-[-28px] tablet:translate-y-[-25px]' : ''}
					/>
				{/each}
			</div>
		</div>

		<div class="border-b border-solid border-[#C6D1EF] my-8" />	<!-- adding margin at divider -->

		<!-- Gold Sponsors -->
		<div class="flex flex-col ml-2">
			<div class="flex flex-row gap-2">
				<img src="/ribbon.svg" alt="Ribbon" />
				<h2 class="text-colorstackuf-blue font-archer-book text-2xl">Silver</h2>
			</div>
			<div
				class="flex flex-col tablet:flex-row tablet:justify-start items-center justify-center gap-8"
			>
				{#each gold as sponsor}
					<img src={sponsor.src} alt={sponsor.name} width={sponsorSize} height={sponsorSize} />
				{/each}
			</div>
		</div>
	</div>
</div>
