import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import StepContext from "./context/StepProvider";

function App() {
  const [step, setStep] = React.useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <Header />
      <Form />
      <Footer />
    </StepContext.Provider>
  );
}

export default App;
