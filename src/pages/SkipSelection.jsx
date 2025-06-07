import { useEffect, useState } from "react";

import SkipCard from "../components/SkipCard";
import Stepper from "../components/Stepper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

import stepData from "../shared/data/stepData";
import { fetchSkips } from "../services/skipService";

const SkipSelection = () => {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (data) => {
    setSelected((prev) => (prev?.id === data.id ? null : data));
  };

  useEffect(() => {
    fetchSkips().then(setSkips);
  }, []);

  return (
    <div className="px-4 max-w-[1440px] mx-auto">
      <Stepper steps={stepData} currentStep={2} />

      <div className="text-center my-10">
        <Title>Choose Your Skip Size</Title>
        <Subtitle>Select the skip size that best suits your needs</Subtitle>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4 grid gap-4 lg:grid-cols-2">
          {skips.map((item) => (
            <SkipCard
              key={item.id}
              data={item}
              selected={selected?.id === item.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
        <div className="lg:w-1/4">
          <div className="border-b-2 rounded p-4 text-white bg-[#1E1E1E]">Detail</div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelection;
