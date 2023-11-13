/* import { ControlledForm } from "./ControlledForm"; */
import { useState } from "react";
import { UncontrolleOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={()=> goToNext({name:'John Doe'})}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 34 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ haiColor: "brown" })}>Next</button>
  </>
);

function App() {
  return (
    <UncontrolleOnboardingFlow onFinish={data => { 
    console.log(data); 
    alert('Onboarding complete!')
    }}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolleOnboardingFlow>
  );
}

export default App;
