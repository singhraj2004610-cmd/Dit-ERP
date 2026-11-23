
import { useState } from "react";

function DropDown1({ onSelectPage }) {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">

      {/* Parent Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="hover:bg-slate-600 text-white px-2 rounded-md transition w-full text-left"
      >
        Academic
      </button>

      {isAcademicOpen && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">

          {/* Child Dropdown */}
          <div className="p-2 rounded-md border border-blue-400 text-sm">

            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 hover:bg-slate-600 text-left w-full"
            >
              Academic Activities
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="bg-slate-700">

                 <button
                  onClick={() => onSelectPage("performance")}
                  className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full text-left rounded-md border border-blue-400"
                >
                  Performance Indices
                </button>              

                 <button
                  className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full text-left rounded-md border border-blue-400"
                  onClick={() => onSelectPage("myCourses")}
                >
                  My Courses
                </button>

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown1;

