import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

// Inline styles
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "250px",
    textAlign: "center",
  },
  title: {
    color: "#333",
  },
};

export default UserCard;
