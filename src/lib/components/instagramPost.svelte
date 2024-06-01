<script lang="ts">
	// @ts-expect-error - Defined here https://behold.so/docs/api/#response-format
	export let post;
	export let large = false;

	const dateDifferenceInDays = (date: string) => {
		const currentDate = Date.now();
		const postDate = new Date(date);
		return (currentDate - postDate.getTime()) / 86_400_000;
	};

	let timeSincePost = dateDifferenceInDays(post.timestamp); // in days
	let unit = timeSincePost.toFixed(0) === '1' ? 'days' : 'day';
	if (timeSincePost >= 7) {
		timeSincePost = timeSincePost / 7; // in weeks
		unit = timeSincePost.toFixed(0) === '1' ? 'week' : 'weeks';
	}

	if (timeSincePost > 4) {
		timeSincePost = timeSincePost / 4; // in months
		unit = timeSincePost.toFixed(0) === '1' ? 'month' : 'months';
	}
</script>

<a href={post.permalink} target="_blank" class="relative h-full w-full">
	<img
		src={post.mediaUrl}
		alt={post.caption}
		class="w-full h-full object-cover rounded-md z-[-1]"
	/>
	<img
		src="/logos/instagram.svg"
		alt="Instagram"
		class="absolute bottom-4 right-2 tablet:right-4 w-4 h-4 tablet:w-8 tablet:h-8 z-20"
	/>
	<div
		class={(large
			? 'bottom-4 left-[4rem] tablet:bottom-5 laptop:bottom-6 tablet:left-[4.4rem] laptop:left-20'
			: 'left-9 bottom-4 tablet:left-[3.9rem] laptop:left-[4.5rem]') + ' absolute z-20'}
	>
		<p class="text-white text-[0.6rem] leading-4 tablet:text-sm laptop:text-base font-gotham">
			colorstackuf
		</p>
		<p class="text-white text-[0.6rem] tablet:text-sm font-gotham-light">
			{timeSincePost.toFixed(0) + ' ' + unit} ago
		</p>
	</div>
	<img
		src="/logos/colorstack-logo-insta.svg"
		alt="ColorStack Logo"
		class={(large
			? 'h-[35px] w-[35px] tablet:h-[45px] tablet:w-[45px] laptop:h-[55px] laptop:w-[55px] left-2'
			: 'h-[25px] w-[25px] tablet:h-[35px] tablet:w-[35px] laptop:h-[45px] laptop:w-[45px] left-1') +
			' bg-colorstackuf-blue rounded-full absolute tablet:left-4 z-20 bottom-4'}
	/>
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-100 z-10"
		style="top: 50%;"
	></div>
	<div
		class="absolute inset-0 transition duration-300 hover:bg-neutral-950/70 z-10 flex items-center justify-center w-full h-full group"
	>
		<div class="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
			<p
				class={(large
					? 'w-[16rem] tablet:w-[34rem] notebook:w-[43rem] laptop:w-[22rem] desktop:w-[28rem] lg-desktop:w-[35rem]'
					: 'w-[9rem] tablet:w-[16rem] notebook:w-[20rem] laptop:w-[16rem] desktop:w-[20rem] lg-desktop:w-[25rem]') +
					' relative text-white truncate'}
			>
				{post.caption}
			</p>
		</div>
	</div>
</a>
