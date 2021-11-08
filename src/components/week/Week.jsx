import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, calendarEvents, onDeleteEvent }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = moment(dayStart).endOf('day').toDate();

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
        />
      );
    })}
  </div>
);

Week.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.object).isRequired,
  calendarEvents: PropTypes.arrayOf(PropTypes.object),
  onDeleteEvent: PropTypes.func.isRequired,
};

Week.defaultProps = {
  calendarEvents: [],
};

export default Week;
