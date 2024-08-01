<script>
    import { onMount } from 'svelte';
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import googleCalendarPlugin from '@fullcalendar/google-calendar';
  
    onMount(() => {
      const calendarEl = document.getElementById('calendar');
  
      if (calendarEl) {
        const calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin, googleCalendarPlugin],
          initialView: 'dayGridMonth',
          googleCalendarApiKey: 'AIzaSyCaFdgmf7IwAqT2kvqe_mruFI1R-OTqKE8',
          themeSystem: 'standard',
          events: {
            googleCalendarId: '1fb8181864cdf12022687447cf9bcd496982efd6d79567fb3253d875b3c9aba7@group.calendar.google.com'
          },
          headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: ''
          },
        });
  
        
        calendar.render();
      } else {
        console.error('Calendar element not found.');
      }
    });
  </script>

<style>
    /* Import FullCalendar styles */
    @import 'https://unpkg.com/@fullcalendar/core@6.1.14/main.css';
    @import 'https://unpkg.com/@fullcalendar/daygrid@6.1.14/main.css';
</style>



  <div class="mt-6 justify-center lg-desktop:grid lg-desktop:grid-cols-[1fr_1536px_1fr] bg-body-background-white">
    <div>
    </div>
    <div>
      <div class="laptop:grid-cols-1 mt-6 laptop:gap-0 px-mobile-padding-x tablet:px-tablet-padding-x laptop:max-h-[600px] laptop:min-h-[420px] laptop:min-[1150px]:px-[50px] desktop:px-[0px]">
        <!-- Get Involved Section -->
        <div class="relative bg-body-background-blue rounded-md rounded-l-none flex flex-col p-16 max-w-[1041px] w-full h-auto laptop:top-[19px]">
          <h2 class="text-white text-4xl font-gotham mb-6 -mt-2">
            Get Involved
          </h2>
          <p class="text-white text-xl font-archer mb-12">
            The University of Florida ColorStack chapter is a dynamic community of over 170 Black and Latinx Computer Science students, 
            offering year-round opportunities for community building, academic support, and career development. 
            Through our Discord server, members exchange resources and forge lasting connections. 
            Our events feature insightful sessions led by industry experts and provide invaluable networking opportunities. 
            Additionally, we collaborate with top tech companies to offer mentorship, workshops, and enhanced job search support, giving our members a competitive edge in the industry. 
            Join us and explore the multitude of opportunities to grow and excel in your academic and professional journey.
          </p>
          <a href="https://calendar.google.com/calendar/u/0/r?cid=MWZiODE4MTg2NGNkZjEyMDIyNjg3NDQ3Y2Y5YmNkNDk2OTgyZWZkNmQ3OTU2N2ZiMzI1M2Q4NzViM2M5YWJhN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank" rel="noopener noreferrer">
            <button class="bg-colorstackuf-orange text-black text-xl font-gotham hover:bg-colorstackuf-blue w-[262px] h-[52px] laptop:w-[262px] laptop:h-[52px] tablet:h-[48px] tablet:w-[262px] laptop:left-[65px] laptop:gap-0 rounded-[24px]">
              Subscribe to Calendar
            </button>
          </a>    
        </div>
      </div>
      <!-- Calendar Section -->
      <div class="relative bg-body-background-white p-2 rounded-md flex flex-col mb-2 mt-12 mx-auto max-w-[90%]"> 
        <h2 class="text-black text-4xl font-gotham mb-4">
          Event Calendar
        </h2>
            <div id="calendar" class="w-full h-[320px] tablet:h-[384px] laptop:h-[600px] desktop:h-[700px] bg-gray-100 rounded-lg shadow-md"></div>
          </div>
    </div>
  </div>
  