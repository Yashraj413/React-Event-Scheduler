import React from "react";

const PreviewCalendar = ({ dates }) => (
  <div>
    <h4>Upcoming Occurrences Preview:</h4>
    <ul data-testid="preview-list">
      {dates.map(date => (
        <li key={date} data-testid="preview-date">{date}</li>
      ))}
    </ul>
  </div>
);

export default PreviewCalendar;
