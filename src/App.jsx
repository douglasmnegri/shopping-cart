import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import Header from "./Home/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Button />
      </div>
    </>
  );
}

export default App;
