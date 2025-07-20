import React, { useState } from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import DatePickerUI from "./DatePickerUI";
import PreviewCalendar from "./PreviewCalendar";
import { generateOccurrences } from "../utils/recurrenceUtils";
const Scheduler = () => {
  const [recurrence, setRecurrence] = useState("none");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const occurrences = generateOccurrences(date, recurrence);

  return (
    <div>
      <h2>Schedule an Event</h2>
      <DatePickerUI date={date} onChange={setDate} />
      <RecurrenceOptions recurrence={recurrence} onChange={setRecurrence} />
      <PreviewCalendar dates={occurrences} />
    </div>
  );
};

export default Scheduler;
