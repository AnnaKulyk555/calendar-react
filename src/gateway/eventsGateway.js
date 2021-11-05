const baseUrl = 'https://6151af974a5f22001701d380.mockapi.io/p1/events';

export const fetchEventsData = () =>
  fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(eventsList =>
      eventsList.map(({ dateFrom, dateTo, ...task }) => ({
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...task,
      })),
    );

export const createEvent = calendarEvent =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(calendarEvent),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  });
