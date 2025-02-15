import React from "react";
import Hello from "./hello"; // Importing the Hello component
import JSXIntro from "./JSXIntro"; // Importing the JSXIntro component
import Greeting from "./greeting"; // Importing the Greeting component
import WelcomeMessage from "./WelcomeMessage"; // Importing the WelcomeMessage component
import UserCard from "./UserCard"; // Importing the UserCard component
import Counter from "./Counter"; // Importing the Counter component





function App() {
  return (
    <div>
      {/* <Hello /> */}
      {/* <JSXIntro /> */}
      {/* <Greeting name="John" />   */}
      {/* <WelcomeMessage /> */}
      {/* <UserCard name="John Doe" age={30} location="New York" /> */}
      {/* <UserCard name="Jane Smith" age={25} location="Los Angeles" /> */}
      <Counter />
    </div>
  );
}

export default App;
