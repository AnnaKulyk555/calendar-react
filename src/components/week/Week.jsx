import React, { useState, useEffect } from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, calendarEvents, onDeleteEvent }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  const getNextMinute = () => new Date().getMinutes();

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(getNextMinute());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        // getting all events from the day we will render
        const dayEvents = calendarEvents.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDeleteEvent={onDeleteEvent}
            minutes={minutes}
          />
        );
      })}
    </div>
  );
};

export default Week;
