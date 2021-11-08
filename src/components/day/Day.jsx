import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, onDeleteEvent, minutes }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
        const isCurrentHour = new Date().getDate() === dataDay && new Date().getHours() === hour;
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            onDeleteEvent={onDeleteEvent}
            isCurrentHour={isCurrentHour}
            minutes={minutes}
          />
        );
      })}
    </div>
  );
};

export default Day;
