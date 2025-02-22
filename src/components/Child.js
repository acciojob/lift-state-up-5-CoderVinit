import React from "react";

const Child = ({ setIsLoggedIn }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
        <span style={{fontSize:"20px"}}>Username:</span><input
        style={{fontSize:"15px"}}
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          required
        />
        </div>
        <div>
            <span style={{fontSize:"20px"}}>Password:</span> <input
            style={{fontSize:"15px"}}
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
        />
        </div>
       
        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Child;
