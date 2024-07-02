import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  if (calendarEl) {
    var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, googleCalendarPlugin],
      initialView: 'dayGridMonth',
      googleCalendarApiKey: '', 
      events: {
        googleCalendarId: ''
      },
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
    });

    calendar.render();
  } else {
    console.error('Calendar element not found.');
  }
});
