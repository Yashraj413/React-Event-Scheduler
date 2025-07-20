import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Scheduler from "../components/Scheduler";

describe("Scheduler integration test", () => {
  test("updates preview when recurrence and start date are changed", () => {
    render(<Scheduler />);
    
    const dateInput = screen.getByLabelText(/Select Start Date/);
    fireEvent.change(dateInput, { target: { value: "2024-07-10" } });

    const weeklyRadio = screen.getByTestId("recurrence-weekly");
    fireEvent.click(weeklyRadio);

    const previewItems = screen.getAllByTestId("preview-date");
    expect(previewItems[0].textContent).toBe("2024-07-10");
    expect(previewItems[1].textContent).toBe("2024-07-17");
    expect(previewItems[2].textContent).toBe("2024-07-24");
  });
});
