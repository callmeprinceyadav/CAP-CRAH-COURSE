// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  // Declare a state variable for the stopwatch count, initialized to 0
  const [count, setCount] = useState(0);

  // useEffect hook to start the stopwatch when the component mounts
  useEffect(() => {
    // Set an interval to increment the count every second
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        // If the count reaches 10, clear the interval to stop the stopwatch
        if (prevCount >= 9) {
          clearInterval(intervalId);
        }
        // Return the updated count
        return prevCount + 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    function cleanupFunction() {
      clearInterval(intervalId);
    }
    return cleanupFunction;
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      {/* Display the current count */}
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
