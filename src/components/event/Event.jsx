import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, onDeleteEvent }) => {
  const [isVisibleBtn, setVisibleBtn] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const eventClickHandler = () => {
    setVisibleBtn(!isVisibleBtn);
  };

  const deleteEventHandler = () => {
    onDeleteEvent(id);
  };

  return (
    <div onClick={eventClickHandler} style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button
        onClick={deleteEventHandler}
        className={!isVisibleBtn ? 'hidden' : 'delete-event-btn'}
      >
        <i className="fas fa-trash delete-event-btn_icon"></i>
      </button>
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
};

export default Event;
