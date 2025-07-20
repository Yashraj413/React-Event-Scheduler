import React from "react";
const RecurrenceOptions = ({ recurrence, onChange }) => (
  <fieldset>
    <legend>Recurrence Pattern</legend>
    <label>
      <input
        type="radio"
        name="recurrence"
        value="none"
        checked={recurrence === "none"}
        onChange={() => onChange("none")}
        data-testid="recurrence-none"
      />
      None
    </label>
    <label>
      <input
        type="radio"
        name="recurrence"
        value="daily"
        checked={recurrence === "daily"}
        onChange={() => onChange("daily")}
        data-testid="recurrence-daily"
      />
      Daily
    </label>
    <label>
      <input
        type="radio"
        name="recurrence"
        value="weekly"
        checked={recurrence === "weekly"}
        onChange={() => onChange("weekly")}
        data-testid="recurrence-weekly"
      />
      Weekly
    </label>
    <label>
      <input
        type="radio"
        name="recurrence"
        value="monthly"
        checked={recurrence === "monthly"}
        onChange={() => onChange("monthly")}
        data-testid="recurrence-monthly"
      />
      Monthly
    </label>
  </fieldset>
);

export default RecurrenceOptions;
