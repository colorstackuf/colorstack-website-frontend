<script lang="ts">
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div
	class="px-mobile-padding-x h-[5rem] flex flex-col items-center justify-center font-gotham-book mt-4"
>
	<div class="w-full max-w-page-width h-full flex items-center">
		<a href="/" class="flex-[1]">
			<img
				class="object-contain w-[20rem]"
				src="/logos/colorstack-logo-title.svg"
				alt="Colorstack logo and title"
			/>
		</a>

		<div class="flex items-center gap-12 h-full">
			{#if innerWidth >= 1024}
				<a class="nav-btn" href="/about">About</a>
				<a class="nav-btn" href="/sponsors">Sponsors</a>
				<a class="nav-btn" href="/students">Students</a>
				<div
					class="border-2 border-solid border-white self-center flex items-center py-[0.8rem] px-6 rounded-[1.2rem]"
				>
					<a class="nav-btn text-align-center" href="https://linktr.ee/colorstackuf"
						>Become a Member</a
					>
				</div>
			{:else}
				<div class="sidebar-menu">
					<img src="/sidebar-menu.svg" alt="Sidebar menu" />
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.nav-btn {
		transform: translateY(0.5rem);
		color: white;
		font-size: 1.2rem;
		text-decoration: none;
	}
</style>
