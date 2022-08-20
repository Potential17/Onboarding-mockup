import React, { useContext } from "react";
import StepContext from "../context/StepProvider";

export default function Header() {
  const { step, setStep } = useContext(StepContext);
  return (
    <>
      <header>
        <img src="./logo.png" alt="" /> <span className="heading">Eden</span>
      </header>
      <div className="steps">
        <div className={"progressLine step" + step}></div>
        <div
          className={step >= 1 ? "step stepOne done" : "step stepOne"}
          onClick={() => {
            setStep(1);
          }}
        >
          1
        </div>
        <div
          className={step >= 2 ? "step stepTwo done" : "step stepTwo"}
          onClick={() => {
            setStep(2);
          }}
        >
          2
        </div>
        <div
          className={step >= 3 ? "step stepThree done" : "step stepThree"}
          onClick={() => {
            setStep(3);
          }}
        >
          3
        </div>
        <div
          className={step >= 4 ? "step stepFour done" : "step stepFour"}
          onClick={() => {
            setStep(4);
          }}
        >
          4
        </div>
      </div>
    </>
  );
}
