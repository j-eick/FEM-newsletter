import "./App.css";
import "./mobileMax500.css";
import Input from "./components/input";
import List from "./components/list";
import { useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const reportWindowSize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  window.onresize = reportWindowSize;

  return (
    <div className="container">
      <div className="left">
        <h1 className="title">Stay updated!</h1>
        <p className="description">
          Join 60.000+ product managers receiving monthly updates on:
        </p>
        <List />
        <Input />
      </div>
      <div className="right">
        {windowSize.width < 376 ? (
          <img
            className="img"
            src="/images/illustration-sign-up-mobile.svg"
            alt=""
          />
        ) : (
          <img
            className="img"
            src="/images/illustration-sign-up-desktop.svg"
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default App;
