import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import calculateCurrentActiveButtons from "./TimeSlotLogic.jsx";

function TimeSlotSection() {
  // Logic to handle what buttons are shown dpeending on what the current selection is
  const [buttons, setButtons] = useState([]);

  const handleClick = (selectedButton) => {
    //make api call to set the current button as current status and add to history

    // update UI based on current selection
    // TODO: This could cause the UI and DB to become out of sync. Is the reduction of api call worth it?
    setButtons(calculateCurrentActiveButtons(selectedButton));
  };

  useEffect(() => {
    // hit backend and get current status

    // run the current status through the business logic
    setButtons(calculateCurrentActiveButtons());
  }, [setButtons]);

  return (
    <div className="d-flex flex-column gap-4">
      Test
      {buttons.map((button) => {
        // If button is disabled, dont render
        return (
          <div>
            <Button onClick={() => handleClick(button)} variant="primary">
              {button}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default TimeSlotSection;
