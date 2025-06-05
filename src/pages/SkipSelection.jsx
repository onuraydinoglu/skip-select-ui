import Stepper from "../components/Stepper";
import stepData from "../shared/data/stepData";

const SkipSelection = () => {
  return <Stepper steps={stepData} currentStep={2} />;
};

export default SkipSelection;
