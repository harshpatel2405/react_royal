import React, { useState } from "react";

export const InputDemo3 = () => {
  // State to store the selected date (from date input)
  const [selectedDate, setselectedDate] = useState();

  // State to check if the form is submitted
  const [isSubbmited, setisSubbmited] = useState(false);

  /**
   * Function: getDateLabel
   * ----------------------
   * Takes a selected date (string format) and compares it with today's date.
   * Returns a human-readable label such as "yesterday", "today", "tomorrow", etc.
   * If the difference is more than 2 days, returns "After X days" or "Before X days".
   */
  const getDateLabel = (date) => {
    // Create a Date object for today's date
    const today = new Date();

    // Create a Date object for the chosen date
    const choosenDate = new Date(date);

    // Reset both dates to midnight (00:00:00) to compare only the date part
    today.setHours(0, 0, 0, 0);
    choosenDate.setHours(0, 0, 0, 0);

    /**
     * Calculate the difference in days
     * -------------------------------
     * getTime() → returns milliseconds since Jan 1, 1970
     * Subtract chosenDate - today → gives difference in milliseconds
     * Divide by (1000*60*60*24) → converts milliseconds → days
     */
    const diffDays = Math.round(
      (choosenDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    console.log("Difference in days:", diffDays);

    // Use switch-case for common values (-2 to +2)
    switch (diffDays) {
      case -2:
        return "Day before yesterday"; // 2 days ago
      case -1:
        return "Yesterday"; // 1 day ago
      case 0:
        return "Today"; // same day
      case 1:
        return "Tomorrow"; // 1 day later
      case 2:
        return "Day after tomorrow"; // 2 days later
      default:
        // For other values, handle positive & negative separately
        if (diffDays > 0) {
          return `After ${diffDays} days`; // Future dates
        } else if (diffDays < 0) {
          const finalDays = -diffDays;
          return `Before ${finalDays} days`; // Past dates
        }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>INPUT DEMO 3</h1>

      {/* Input Section */}
      <div>
        <label>DATE</label>
        <input
          type="date"
          onChange={(event) => {
            // Save the selected date in state
            setselectedDate(event.target.value);
          }}
        />
        {/* Shows the raw date string immediately after selection */}
        {selectedDate}
      </div>

      {/* Submit Button */}
      <div>
        <button
          onClick={() => {
            setisSubbmited(true); // Mark form as submitted
          }}
        >
          Submit
        </button>
      </div>

      {/* Conditional Rendering:
          Only show output when "isSubbmited" is true */}
      {isSubbmited && (
        <div>
          {/* Display the exact selected date */}
          <h1>Date = {selectedDate}</h1>

          {/* Display human-readable label from getDateLabel() */}
          <h2>{getDateLabel(selectedDate)}</h2>
        </div>
      )}
    </div>
  );
};

/*
!Formatted Code ::: use only when css is needed...
import React, { useState } from "react";

export const InputDemo3 = () => {
  const [selectedDate, setselectedDate] = useState();
  const [isSubbmited, setisSubbmited] = useState(false);

  const getDateLabel = (date) => {
    const today = new Date();
    const choosenDate = new Date(date);

    today.setHours(0, 0, 0, 0);
    choosenDate.setHours(0, 0, 0, 0);

    const diffDays = Math.round(
      (choosenDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    switch (diffDays) {
      case -2:
        return "Day before yesterday";
      case -1:
        return "Yesterday";
      case 0:
        return "Today";
      case 1:
        return "Tomorrow";
      case 2:
        return "Day after tomorrow";
      default:
        if (diffDays > 0) {
          return `After ${diffDays} days`;
        } else if (diffDays < 0) {
          const finalDays = -diffDays;
          return `Before ${finalDays} days`;
        }
    }
  };

  return (
    <div>
    
      <style>
        {`
          .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
            border: 2px solid #ddd;
            border-radius: 10px;
            background-color: #f9f9f9;
          }

          h1 {
            margin-bottom: 20px;
            color: #333;
          }

          label {
            font-size: 18px;
            margin-right: 10px;
          }

          input[type="date"] {
            padding: 6px;
            font-size: 16px;
            margin-bottom: 15px;
          }

          button {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }

          .result {
            margin-top: 30px;
            font-size: 18px;
            color: #333;
          }
        `}
      </style>

      <div className="container">
        <h1>INPUT DEMO 3</h1>
        <div>
          <label>DATE</label>
          <input
            type="date"
            onChange={(event) => {
              setselectedDate(event.target.value);
            }}
          />
          {selectedDate}
        </div>
        <div>
          <button
            onClick={() => {
              setisSubbmited(true);
            }}
          >
            Submit
          </button>
        </div>

        {isSubbmited && (
          <div className="result">
            <h1>Date = {selectedDate}</h1>
            <h2>{getDateLabel(selectedDate)}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

*/
