
import { useState } from "react";

function DropDown2({ onSelectPage }) {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-56 bg-slate-800 rounded-md shadow-lg p-3">

      {/* Parent Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="bg-slate-800 text-white px-2 py-2 rounded-md"
      >
        Academic Documents
      </button>

      {isAcademicOpen && (
        <div className="mt-2 w-56 bg-slate-800 rounded-md shadow-lg">

          {/* Child Dropdown */}
          <div className="p-2">

            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-2 py-2 rounded-md hover:bg-slate-600 text-left"
            >
              Generate Grade Sheet
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="mt-2 ml-4 bg-slate-700 rounded-md">

                <button
                  className="p-3 text-white hover:bg-blue-600 cursor-pointer w-full text-left"
                  onClick={() => onSelectPage("gradeSheet")}
                >
                  Grade Sheet
                </button>

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown2;