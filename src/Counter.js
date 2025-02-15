import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State to manage count

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

// Inline styles for simple styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Counter;
