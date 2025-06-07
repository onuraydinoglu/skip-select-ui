import { ArrowRight } from "lucide-react";
import { getSkipImageUrl } from "../utils/getSkipImageUrl";
// import { isNew } from "../utils/isNew";
import { shouldShowNew } from "../utils/shouldShowNew";

const SkipDetail = ({ data }) => {
  if (!data) {
    return (
      <div className="border-b-2 border-blue-300 rounded p-4 text-white bg-[#1E1E1E] sticky top-5">
        <h3 className="text-lg font-semibold text-white mb-2">Organization Details</h3>
        <p className="text-gray-400 text-sm">
          Please select a skip from the available options to view detailed information here. This
          section will display the selected skip’s specifications, pricing, and availability.
        </p>
      </div>
    );
  }

  const backgroundUrl = getSkipImageUrl(data.size);

  return (
    <div
      className="relative rounded overflow-hidden border-b-2 border-blue-700 sticky top-5"
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      {shouldShowNew(data.created_at, data.id) && (
        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-md">
          New
        </span>
      )}

      <div className="relative p-4 text-white space-y-2 z-10">
        <h3 className="text-2xl font-bold">{data.size} Yard Skip</h3>
        <hr className="border-b-1 w-10 border-blue-700 " />
        <p className="text-gray-200">Hire Period: {data.hire_period_days} days</p>

        <p className="text-gray-200">
          Transport Cost:{" "}
          {data.transport_cost !== null ? (
            <>£{data.transport_cost}</>
          ) : (
            <span className="italic"> Not specified</span>
          )}
        </p>

        <p className="text-gray-200">
          Per Tonne Cost:{" "}
          {data.per_tonne_cost !== null ? (
            <>£{data.per_tonne_cost}</>
          ) : (
            <span className="italic">Not specified</span>
          )}
        </p>

        <p className="text-gray-200">Price: £{data.price_before_vat}</p>
        <p className="text-gray-200">
          On Road:{" "}
          <span className={data.allowed_on_road ? "text-green-400" : "text-yellow-400"}>
            {data.allowed_on_road ? "Allowed" : "Not Allowed"}
          </span>
        </p>
        <p className="text-gray-200">
          Heavy Waste:{" "}
          <span className={data.allows_heavy_waste ? "text-green-400" : "text-red-400"}>
            {data.allows_heavy_waste ? "Accepted" : "Not Accepted"}
          </span>
        </p>

        <p className="text-gray-200">Postcode: {data.postcode}</p>

        <p className="text-gray-200">
          Area:{" "}
          {data.area && data.area.trim() !== "" ? (
            data.area
          ) : (
            <span className="italic">Not specified</span>
          )}
        </p>

        <p className="text-gray-200">
          Availability:{" "}
          {data.forbidden ? (
            <span className="text-red-400 font-semibold">Not available in this postcode</span>
          ) : (
            <span className="text-green-400">Available</span>
          )}
        </p>

        <p className="text-[11px] text-gray-300 pt-4 italic">
          Imagery and information shown throughout this website may not reflect the exact shape or
          size specification, colours may vary, options and/or accessories may be featured at
          additional cost.
        </p>

        <div className="flex justify-end gap-4 pt-4">
          <button className="btn btn-primary rounded">Back</button>
          <button className="btn btn-info rounded">
            Continue <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipDetail;
