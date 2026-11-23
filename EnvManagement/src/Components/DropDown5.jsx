import { useState } from "react";

function DropDown5({onSelectPage}) {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">
      {/* Process Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="text-white px-2 w-full rounded-md hover:bg-slate-600 text-left"
      >
        Placement
      </button>

      {isAcademicOpen && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">
          {/* Child Dropdown */}
          <div className="p-2 rounded-md border border-blue-400 text-sm">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left w-full"
            >
              Process
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="bg-slate-700 ">
                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("career")}
                >
                  Career Choice
                </button>

                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("placement")}
                >
                  Placement Registration
                </button>

                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("profile")}
                >
                  Profile Update
                </button>

                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("all")}
                >
                  All Job Opning
                </button>

                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("apply")}
                >
                  Apply for Drive
                </button>

                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("offer")}
                >
                  Offer Report
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown5;
