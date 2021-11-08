import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

import './hour.scss';

const Hour = ({ dataHour, hourEvents, onDeleteEvent, isCurrentHour }) => {
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

  const minuteStyle = {
    top: minutes,
  };
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <span
        style={minuteStyle}
        className={isCurrentHour ? 'calendar__time-slot-minute' : 'hidden'}
      ></span>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            // calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.arrayOf(PropTypes.object),
  onDeleteEvent: PropTypes.func.isRequired,
  isCurrentHour: PropTypes.bool,
};

Hour.defaultProps = {
  hourEvents: [],
};

export default Hour;
