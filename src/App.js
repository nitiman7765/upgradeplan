import "./App.css";
import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./components/Payment";
import Payment2 from "./components/Payment2";
import Payment3 from "./components/Payment3";
import UpGrade from "./components/UpGrade";
// impoet payment from "./ "

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UpGrade/>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment2" element={<Payment2 />} />
            <Route path="/payment3" element={<Payment3 />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Top /> */}
    </>
  );
}

export default App;
