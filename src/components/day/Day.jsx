import React from 'react';
import PropTypes from 'prop-types';

import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, onDeleteEvent, currentMonth }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        const isCurrentDay =
          currentMonth === new Date().getMonth() && new Date().getDate() === dataDay;
        const isCurrentHour = isCurrentDay && new Date().getHours() === hour;
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            onDeleteEvent={onDeleteEvent}
            isCurrentHour={isCurrentHour}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.arrayOf(PropTypes.object),
  onDeleteEvent: PropTypes.func.isRequired,
  currentMonth: PropTypes.number.isRequired,
};

Day.defaultProps = {
  dayEvents: [],
};

export default Day;
