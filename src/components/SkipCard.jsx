import { ArrowRight, Check, AlertTriangle, X } from "lucide-react";
import { getSkipImageUrl } from "../utils/getSkipImageUrl";
// import { isNew } from "../utils/isNew";
import { shouldShowNew } from "../utils/shouldShowNew";

const SkipCard = ({ data, selected, onSelect }) => {
  const imageUrl = getSkipImageUrl(data.size);

  return (
    <div
      className={`card card-side items-start shadow-lg border-b rounded cursor-pointer transition bg-[#1E1E1E] 
    ${selected ? "border-blue-700" : "border-blue-300"} hover:border-blue-700`}
      onClick={() => onSelect(data)}
    >
      {shouldShowNew(data.created_at, data.id) && (
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-md">
          New
        </span>
      )}

      <div className="flex flex-col pl-2">
        <figure className="w-40 h-32">
          <img
            src={imageUrl}
            alt={`${data.size} Yard Skip`}
            className="w-36 h-24 object-contain rounded"
          />
        </figure>

        <div className="text-xs text-white flex gap-2 px-2">
          <span
            className={`badge flex items-center gap-1 px-2 py-1 rounded ${
              data.allowed_on_road ? "bg-green-900 text-green-400" : "bg-yellow-900 text-yellow-400"
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
            title={data.allows_heavy_waste ? "Accepts heavy waste" : "Does not accept heavy waste"}
          >
            {data.allows_heavy_waste ? <Check size={12} /> : <X size={12} />}
            <span>HW</span>
          </span>
        </div>
      </div>

      <div className="card-body text-white">
        <div className="flex items-center justify-between">
          <h2 className="xl:card-title badge badge-info rounded">{data.size} Yards</h2>
          <div>
            <p className="text-xl text-blue-700 px-2">£{data.price_before_vat}</p>
          </div>
        </div>
        <p className="text-xl">{data.size} Yard Skip</p>
        <p className="text-gray-400 text-sm">{data.hire_period_days} day hire period</p>
        <div className="card-actions justify-end">
          <button
            className={`btn rounded flex items-center gap-2 ${
              selected ? "btn-info" : "btn-primary"
            }`}
          >
            {selected ? "Selected" : "Select This Skip"}
            {selected ? <Check size={18} /> : <ArrowRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
