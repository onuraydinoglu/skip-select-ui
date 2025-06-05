const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex items-start justify-start md:justify-center bg-black py-6 px-4 min-w-max">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          const textColor = isCompleted || isCurrent ? "text-blue-500" : "text-gray-500";
          const cursor = isCompleted || isCurrent ? "cursor-pointer" : "cursor-not-allowed";
          const lineColor = isCompleted ? "bg-blue-500" : "bg-gray-500";

          return (
            <div key={index} className="flex items-center">
              <div className={`flex items-center gap-2 ${textColor} ${cursor}`}>
                <Icon className="w-5 h-5" />
                <span className="text-sm">
                  {step.label}
                  {isCurrent && <span className="ml-1 text-xs text-blue-400">(in progress)</span>}
                </span>
              </div>

              {index !== steps.length - 1 && <div className={`mx-3 h-px w-10 ${lineColor}`}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
