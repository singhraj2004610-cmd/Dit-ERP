
import { useState } from "react";

function DropDown2({ onSelectPage }) {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">

      {/* Parent Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="hover:bg-slate-600 text-white px-2 rounded-md w-full text-left"
      >
        Academic Documents
      </button>

      {isAcademicOpen && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg border border-blue-400">

          {/* Child Dropdown */}
          <div className="p-2 text-sm">

            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-2 py-2 rounded-md hover:bg-slate-600 text-left w-full"
            >
              Generate Grade Sheet
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="bg-slate-700 rounded-md">

                <button
                  className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full text-left border rounded-md border-blue-400"
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