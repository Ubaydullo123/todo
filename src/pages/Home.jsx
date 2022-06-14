import React, { useState } from "react";

const Home = () => {
  let time = new Date().toLocaleTimeString();
  const [times, setTimes] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTimes(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1 className="header__title">Home</h1>
      <div>
        <h2 className="home__time">{times}</h2>
      </div>
    </div>
  );
};

export default Home;
