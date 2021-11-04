import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

import './hour.scss';

const Hour = ({ dataDay, dataHour, hourEvents, onDeleteEvent }) => {
  const [minutes, setMinutes] = useState(Number(moment().format('mm')));
  // useEffect(() => {
  //   setInterval(() => {
  //     setMinutes(minutes + 1);
  //     console.log(minutes);
  //   }, 60000);
  // }, [moment().format('mm')]);

  const isCurrentHour =
    moment(`${dataDay} ${dataHour}`, 'D H').format('D H') === moment().format('D H');

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

export default Hour;
