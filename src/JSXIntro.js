import React from "react";

const JSXIntro = () => {
  const topic = "JSX"; // Dynamic variable
  const description = "a syntax extension for JavaScript that allows you to write HTML inside React components.";

  return (
    <div>
      <h1>Welcome to {topic}</h1>
      <p>{topic} is {description}</p>
    </div>
  );
};

export default JSXIntro;
