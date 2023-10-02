import { useState } from "react";
import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";

function App() {
  const [redBlue, setRedBlue] = useState("red");
  const onClick = () => {
    if (redBlue === "red") {
      setRedBlue("blue");
    } else {
      setRedBlue("red");
    }
  };
  return (
    <>
      <button
        style={{
          color: redBlue === "red" ? "red" : "blue",
        }}
        onClick={onClick}
      >
        누르면 색이 바뀌는 버튼
      </button>
      <SummaryForm />
    </>
  );
}

export default App;
