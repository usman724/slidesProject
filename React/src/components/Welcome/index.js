import React, { useState } from "react";

import InterAction from "./InterAction";
import Mentimeter from "./Mentimeter";
import Footer from "../layout/Footer";

function Welcome() {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    debugger;
    setActiveStep((prev) => prev + 1);
  };

  const backStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <InterAction nextStep={nextStep} />;
      case 2:
        return <Mentimeter backStep={backStep} nextStep={nextStep} />;
      default:
        break;
    }
  };

  return (
    <div className="welcome-page">
      <div className="container">
        <div className="row">
          <div className="col-md-2 m-auto">
            <div className="logo text-center">
              <h3>LOGO</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="sgt-welcome-sec" className="w-100">
        {renderStep()}
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
