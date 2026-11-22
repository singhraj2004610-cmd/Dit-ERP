import { useState } from "react";

function DropDown5() {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">
      {/* Process Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="text-white px-3 rounded-md hover:bg-slate-600 text-left"
      >
        Placement
      </button>

      {isAcademicOpen && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">
          {/* Child Dropdown */}
          <div className="p-2 rounded-md border border-blue-400 text-sm">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left"
            >
              Process
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="bg-slate-700 rounded-md">
                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400">
                  Career Choice
                </div>

                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400">
                  Placement Registration
                </div>

                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400">
                  Profile Update
                </div>

                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400">
                  All Job Opning
                </div>

                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400">
                  Apply for Drive
                </div>

                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400">
                  Offer Report
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown5;
