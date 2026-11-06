
import { useState } from "react";

function DropDown5() {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-56 bg-slate-800 rounded-md shadow-lg p-3">

      {/* Process Dropdown */}
      <button
        onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
        className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left"
      >
        Process
      </button>

      {/* Dropdown Items */}
      {isActivitiesOpen && (
        <div className="mt-2 ml-4 bg-slate-700 rounded-md">

          <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
            Career Choice
          </div>

          <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
            Placement Registration
          </div>

          <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
           Profile Update
          </div>

          <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
           All Job Opning
          </div>

          <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
            Apply for Drive
          </div>

          <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
            Offer Report
          </div>

        </div>
      )}

    </div>
  );
}

export default DropDown5;
