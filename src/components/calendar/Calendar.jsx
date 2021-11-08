import React, { useEffect, useState } from 'react';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';

import { fetchEventsData, createEvent, deleteEvent } from '../../gateway/eventsGateway';

import './calendar.scss';

const Calendar = ({ weekDates, isModalVisible, onHideModal }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  const fetchEvents = () => {
    fetchEventsData()
      .then(events => {
        setCalendarEvents(events);
      })
      .catch(error => alert(error));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const createEventHandler = calendarEvent => {
    const { date, description, endTime, startTime, title } = calendarEvent;
    createEvent({
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    }).then(() => fetchEvents());
    onHideModal();
  };

  const deleteEventHandler = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            calendarEvents={calendarEvents}
            onDeleteEvent={deleteEventHandler}
          />
        </div>
      </div>
      <Modal
        isModalVisible={isModalVisible}
        onHideModal={onHideModal}
        onCreateEvent={createEventHandler}
      />
    </section>
  );
};

export default Calendar;
