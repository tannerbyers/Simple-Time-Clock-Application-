const buttonDefaults = {
  // should default to false in the beginning. Set to true for testing purposes
  "Clock In": true,
  Break: true,
  Lunch: true,
  "Clock Out": false,
  "Return From Break": false,
  "Return From Lunch": false,
};

const calculateCurrentActiveButtons = (clickedButton) => {
  let shownButtons = [];

  switch (clickedButton) {
    case "Clock In":
      shownButtons = ["Clock Out", "Break", "Lunch"];
      break;
    case "Break":
      shownButtons = ["Return From Break"];
      // code block
      break;
    case "Lunch":
      shownButtons = ["Return From Lunch"];
      // code block
      break;
    case "Clock Out":
      shownButtons = ["Clock In"];
      // code block
      break;
    case "Return From Break":
      shownButtons = ["Clock Out", "Break", "Lunch"];
      // code block
      break;
    case "Return From Lunch":
      shownButtons = ["Clock Out", "Break", "Lunch"];
      // code block
      break;
    default:
      // this happens when a user doesnt have a current status yet (first use).
      shownButtons = ["Clock In"];
      break;
  }
  return shownButtons;
};

export default calculateCurrentActiveButtons;
