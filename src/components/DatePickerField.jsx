import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ selectedDate, onDateChange, label }) => {
  return (
    <div className="date-picker-field">
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="Select your date"
        className="form-control"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
};

export default DatePickerField;