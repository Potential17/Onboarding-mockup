import React, { useContext } from "react";
import StepContext from "../context/StepProvider";

export default function Form() {
  const { step } = useContext(StepContext);

  return (
    <main>
      <form action="">
        <div className={step === 1 ? "form formOne active" : "form formOne"}>
          <div className="labels">
            <h1>Welcome! First Things First</h1>
            <h5>You can always change them later.</h5>
          </div>

          <div className="form-input one">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Steve Jobs" />
            <label htmlFor="name">Display Name</label>
            <input type="text" placeholder="Steve" />
          </div>
        </div>
        <div className={step === 2 ? "form formTwo active" : "form formTwo"}>
          <div className="labels">
            <h1>Let's set up a home for all your work</h1>
            <h5>You can always create another workspace later.</h5>
          </div>

          <div className="form-input one">
            <label htmlFor="name">Workspace Name</label>
            <input type="text" placeholder="Eden" />
            <label htmlFor="name">
              Workspace URL <span>(optional)</span>
            </label>
            <input type="text" placeholder="Steve" />
          </div>
        </div>
        <div
          className={step === 3 ? "form formThree active" : "form formThree"}
        >
          <div className="labels">
            <h1>How are you planning to use Eden?</h1>
            <h5>We'll stramline your setup experience accordingly.</h5>
          </div>
          <div className="form-input three">
            <div className="radio active">
              <img src="./solo.png" alt="" />
              <div className="head">For myself</div>
              <div className="desc">
                Write better. Think more clearly. Stay organized
              </div>
            </div>
            <div className="radio">
              <img src="./team.png" alt="" />
              <div className="head">For myself</div>
              <div className="desc">
                Write better. Think more clearly. Stay organized
              </div>
            </div>
          </div>
        </div>
        <div className={step === 4 ? "form formFour active" : "form formFour"}>
          <img src="./done.png" alt="" className="done" />
          <div className="labels">
            <h1>Congratultions, Eren</h1>
            <h5>You have completed onboarding, you can start using the Eden</h5>
          </div>
        </div>
      </form>
    </main>
  );
}
