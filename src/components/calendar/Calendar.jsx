import React, { useState } from 'react';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';

import eventsData from '../../gateway/eventsData';

import './calendar.scss';

const Calendar = ({ weekDates, isModalVisible, onHideModal }) => {
  const [calendarEvents, setCalendarEvents] = useState(eventsData);

  const createEventHandler = calendarEvent => {
    const { date, description, endTime, startTime, title } = calendarEvent;
    setCalendarEvents([
      ...calendarEvents,
      {
        id: Math.random(),
        title,
        description,
        dateFrom: new Date(`${date} ${startTime}`),
        dateTo: new Date(`${date} ${endTime}`),
      },
    ]);
    onHideModal();
  };

  const deleteEventHandler = id => {
    setCalendarEvents(() => {
      const newEventsData = calendarEvents.filter(event => event.id !== id);
      return newEventsData;
    });
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
