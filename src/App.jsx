import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImgCard from "./assets/components/ImgCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Container ">
        <div className="image-conatiner ">
          <h1 className="text-5xl font-bold  text-start">Alpaca Generator</h1>
          <ImgCard />
        </div>
       
      </div>
    </>
  );
}

export default App;
