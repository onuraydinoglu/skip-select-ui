import { ArrowRight, Check, AlertTriangle, X } from "lucide-react";

const SkipCard = ({ data, selected, onSelect }) => {
  const imageUrl = `/images/${data.size}-yarder-skip.jpg`;

  return (
    <div
      className={`card card-side items-start shadow-lg border-b rounded cursor-pointer transition bg-[#1E1E1E] 
    ${selected ? "border-blue-700" : "border-blue-300"} hover:border-blue-700`}
      onClick={() => onSelect(data)}
    >
      <div className="flex flex-col pl-2">
        <figure className="w-40 h-32">
          <img
            src={imageUrl}
            alt={`${data.size} Yard Skip`}
            className="w-36 h-24 object-contain rounded"
          />
        </figure>

        <p className="text-xl text-blue-700 px-2">£{data.price_before_vat}</p>
      </div>

      <div className="card-body text-white">
        <div className="flex items-center justify-between">
          <h2 className="card-title badge badge-info rounded">{data.size} Yards</h2>

          <div className="mt-2 text-xs text-white flex gap-2">
            <span
              className={`badge flex items-center gap-1 px-2 py-1 rounded ${
                data.allowed_on_road
                  ? "bg-green-900 text-green-400"
                  : "bg-yellow-900 text-yellow-400"
              }`}
              title={data.allowed_on_road ? "Allowed on the road" : "Not allowed on the road"}
            >
              {data.allowed_on_road ? <Check size={12} /> : <AlertTriangle size={12} />}
              <span>OR</span>
            </span>

            <span
              className={`badge flex items-center gap-1 px-2 py-1 rounded ${
                data.allows_heavy_waste ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"
              }`}
              title={
                data.allows_heavy_waste ? "Accepts heavy waste" : "Does not accept heavy waste"
              }
            >
              {data.allows_heavy_waste ? <Check size={12} /> : <X size={12} />}
              <span>HW</span>
            </span>
          </div>
        </div>
        <p className="text-xl">{data.size} Yard Skip</p>
        <p className="text-gray-400 text-sm">{data.hire_period_days} day hire period</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded flex items-center gap-2">
            {selected ? "Selected" : "Select This Skip"}
            {selected ? <Check size={18} /> : <ArrowRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
