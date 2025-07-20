import React from "react";

const DatePickerUI = ({ date, onChange }) => (
  <div>
    <label>
      Select Start Date:&nbsp;
      <input
        type="date"
        value={date}
        onChange={e => onChange(e.target.value)}
        data-testid="date-input"
      />
    </label>
  </div>
);

export default DatePickerUI;
