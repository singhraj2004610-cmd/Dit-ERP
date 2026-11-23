
import { useState } from "react";

function DropDown3({onSelectPage}) {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">

      {/* Parent Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="hover:bg-slate-600 text-white px-2 rounded-md w-full text-left"
      >
        Graduation
      </button>

      {isAcademicOpen && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">

          {/* Child Dropdown */}
          <div className="p-2 border border-blue-400 text-sm rounded-md">

            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left w-full"
            >
              Graduation
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="bg-slate-700">

                <button className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                onClick={() => onSelectPage("graduationState")}
                >
                  Graduation Status
                </button>

                 <button className="p-1 text-white hover:bg-blue-600 w-full cursor-pointer border rounded-md border-blue-400 text-left"
                 onClick={() => onSelectPage("regconvocation")}
                 >
                  Registration for Convocation & Other Documents
                </button>

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown3;
