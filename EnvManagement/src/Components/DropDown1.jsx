
import { useState } from "react";

function DropDown1() {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-56 bg-slate-800 rounded-md shadow-lg p-3">

      {/* Parent Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="bg-slate-800 text-white px-5 py-2 rounded-md"
      >
        Academic
      </button>

      {isAcademicOpen && (
        <div className="mt-2 w-56 bg-slate-800 rounded-md shadow-lg">

          {/* Child Dropdown */}
          <div className="p-3">

            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left"
            >
              Academic Activities
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="mt-2 ml-4 bg-slate-700 rounded-md">

                <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
                  Performance Indices
                </div>

                 <div className="p-3 text-white hover:bg-blue-600 cursor-pointer">
                  My Courses
                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown1;

