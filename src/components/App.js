import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./ChildComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <Child setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
