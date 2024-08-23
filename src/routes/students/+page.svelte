<script>
	import { onMount } from 'svelte';
	import { setAnimations } from '$lib/utils';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';

	onMount(() => {
		setAnimations();
		const calendarEl = document.getElementById('calendar');

		if (calendarEl) {
			const calendar = new Calendar(calendarEl, {
				plugins: [dayGridPlugin, googleCalendarPlugin],
				initialView: 'dayGridMonth',
				googleCalendarApiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY,
				themeSystem: 'standard',
				events: {
					googleCalendarId:
						'1fb8181864cdf12022687447cf9bcd496982efd6d79567fb3253d875b3c9aba7@group.calendar.google.com'
				},
				headerToolbar: {
					left: 'prev,next',
					center: 'title',
					right: ''
				}
			});

			calendar.render();
		} else {
			console.error('Calendar element not found.');
		}
	});
</script>

<div
	class="mt-6 justify-center grid grid-cols-1 lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-white"
>
	<div />

	<div class="px-[16px] notebook:px-0">
		<!-- Get Involved Section -->
		<section class="mt-6 flex flex-col items-center laptop:items-start notebook:pr-16 tablet:mx-0">
			<div
				class="bg-body-background-blue grid grid-cols-1 gap-6 p-8 min-[500px]:p-12 notebook:py-12 notebook:px-20 rounded-xl notebook:rounded-l-none lg-desktop:rounded-l-xl max-w-[700px] notebook:max-w-[1041px] w-full h-auto mt-16"
			>
				<h1 class="slides-in text-white text-3xl tablet:text-4xl font-gotham">Get Involved</h1>
				<p class="slides-in text-white text-lg leading-6 font-archer-light">
					The UF ColorStack chapter is a vibrant community of over 170 Black and Latinx students
					majoring in computer science and related fields. Through year-round opportunities for
					community building, academic support, and career development, our members exchange
					resources, forge connections, and engage in insightful events led by industry experts. Our
					collaborations with top tech companies provide mentorship, workshops, and enhanced job
					search support, giving members a competitive edge in the industry.
				</p>
				<button
					class="slides-in transition-color duration-300 bg-colorstackuf-orange hover:bg-colorstackuf-blue text-black hover:text-white text-xl font-gotham-medium hover:bg-colorstackuf-blue py-2 px-10 rounded-[24px] w-fit"
				>
					<a
						href="https://calendar.google.com/calendar/u/0/r?cid=MWZiODE4MTg2NGNkZjEyMDIyNjg3NDQ3Y2Y5YmNkNDk2OTgyZWZkNmQ3OTU2N2ZiMzI1M2Q4NzViM2M5YWJhN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
						target="_blank"
						rel="noopener noreferrer"
					>
						Subscribe to Calendar
					</a>
				</button>
			</div>
		</section>

		<!-- Calendar Section -->
		<section class="relative bg-body-background-white p-2 rounded-md grid grid-cols-1 mb-2 mt-16">
			<h2 class="text-black text-4xl font-gotham mb-4">Event Calendar</h2>
			<div
				id="calendar"
				class="slides-in justify-self-center w-[76vw] max-w-[1200px] max-h-[60vw] bg-gray-100 rounded-lg shadow-md"
			></div>
		</section>
	</div>
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
