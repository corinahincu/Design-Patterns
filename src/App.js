/* import { ControlledForm } from "./ControlledForm"; */
import { useState } from "react";
import { UncontrolleOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false)
  return (
    <UncontrolleOnboardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolleOnboardingFlow>
  );
}

export default App;
