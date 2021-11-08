import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({ isModalVisible, onHideModal, onCreateEvent }) => {
  const initialFormData = {
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreateEvent(formData);
    setFormData(initialFormData);
  };

  return (
    <div className={isModalVisible ? 'modal overlay' : 'hidden'}>
      <div className="modal__content">
        <div className="create-event">
          <button onClick={onHideModal} className="create-event__close-btn">
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={formData.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={formData.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={formData.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
  onCreateEvent: PropTypes.func.isRequired,
};

export default Modal;
