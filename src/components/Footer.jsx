import React, { useContext } from "react";
import StepContext from "../context/StepProvider";

export default function Footer() {
  let { step, setStep } = useContext(StepContext);
  return (
    <footer>
      <button
        className="createWorkspace"
        onClick={() => {
          if (step === 4) {
            setStep(1);
            alert("Workspace created successfully!");
            document.location.reload();
          } else {
            setStep(step + 1);
          }
        }}
      >
        Create Workspace
      </button>
    </footer>
  );
}
