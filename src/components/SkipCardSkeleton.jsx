const SkipCardSkeleton = () => {
  return (
    <div className="card card-side bg-base-200 shadow-md border border-base-300 animate-pulse">
      <div className="pl-4 flex flex-col justify-center">
        <figure className="w-36 h-28 bg-base-100 rounded">{/* Görsel yerine boş alan */}</figure>

        <div className="flex gap-2 mt-2">
          <div className="badge bg-gray-700 text-gray-700 w-10 h-4 rounded"></div>
          <div className="badge bg-gray-700 text-gray-700 w-10 h-4 rounded"></div>
        </div>
      </div>

      <div className="card-body text-sm">
        <div className="flex justify-between items-center mb-2">
          <div className="bg-gray-700 h-4 w-20 rounded"></div>
          <div className="bg-gray-700 h-4 w-10 rounded"></div>
        </div>

        <div className="bg-gray-700 h-4 w-32 mb-1 rounded"></div>
        <div className="bg-gray-700 h-3 w-24 mb-4 rounded"></div>

        <div className="card-actions justify-end">
          <div className="btn btn-sm bg-gray-700 text-gray-700 w-32 h-8 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkipCardSkeleton;
