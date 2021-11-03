import React, { useEffect, useState } from 'react';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';

import eventsData, { addEvent } from '../../gateway/eventsData';

import './calendar.scss';

const Calendar = ({ weekDates, isModalVisible, onHideModal }) => {
  const [calendarEvents, setCalendarEvents] = useState(eventsData);

  useEffect(() => {
    setCalendarEvents(eventsData);
  }, eventsData);

  const createEventHandler = calendarEvent => {
    addEvent(calendarEvent);
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} calendarEvents={calendarEvents} />
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
