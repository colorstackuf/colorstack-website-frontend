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

<svelte:head>
	<title>ColorStack UF | Students</title>
</svelte:head>

<div
	class="justify-center grid grid-cols-1 lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-white"
>
	<div />

	<div class="px-4 laptop:px-0">
		<!-- Get Involved Section -->
		<section class="mt-6 flex flex-col items-center laptop:items-start laptop:pr-16">
			<div
				class="slides-in bg-body-background-blue grid grid-cols-1 gap-6 p-8 min-[500px]:p-12 notebook:px-[24px] laptop:px-[32px] rounded-xl laptop:rounded-l-none lg-desktop:rounded-l-xl max-w-[900px] laptop:max-w-[1041px] w-full h-auto mt-16"
			>
				<h1 class="text-center tablet:text-left text-white text-3xl tablet:text-4xl font-gotham">
					Get Involved
				</h1>
				<p class="text-center tablet:text-left text-white text-lg leading-6 font-archer-light">
					The UF ColorStack chapter is a vibrant community of over 170 Black and Latinx students
					majoring in computer science and related fields. Through year-round opportunities for
					community building, academic support, and career development, our members exchange
					resources, forge connections, and engage in insightful events led by industry experts. Our
					collaborations with top tech companies provide mentorship, workshops, and enhanced job
					search support, giving members a competitive edge in the industry.
				</p>
				<div class="flex flex-col items-center tablet:items-start">
					<button
						class="transition-color duration-300 bg-colorstackuf-orange hover:bg-colorstackuf-blue text-black hover:text-white text-base tablet:text-xl font-gotham-medium hover:bg-colorstackuf-blue py-3 px-10 rounded-full w-fit"
					>
						<a
							href="https://calendar.google.com/calendar/u/0/r?cid=MWZiODE4MTg2NGNkZjEyMDIyNjg3NDQ3Y2Y5YmNkNDk2OTgyZWZkNmQ3OTU2N2ZiMzI1M2Q4NzViM2M5YWJhN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
							target="_blank"
						>
							Subscribe to Calendar
						</a>
					</button>
				</div>
			</div>
		</section>

		<!-- Calendar Section -->
		<section class="relative bg-body-background-white rounded-md grid grid-cols-1 mb-8 mt-16">
			<h2
				class="px-mobile-padding-x tablet:px-tablet-padding-x laptop:px-laptop-padding-x lg-desktop:p-0 text-black text-4xl font-gotham mb-4"
			>
				Event Calendar
			</h2>
			<div
				id="calendar"
				class="slides-in justify-self-center w-[76vw] h-[76vw] max-w-[900px] max-h-[900px] bg-gray-100 rounded-lg shadow-md p-4"
			></div>
		</section>
	</div>
</div>
