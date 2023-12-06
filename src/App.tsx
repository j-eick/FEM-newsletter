import "./App.css";
import Input from "./components/input";
import List from "./components/list";

function App() {
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
        <img
          className="img"
          src="src/assets/images/illustration-sign-up-desktop.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
