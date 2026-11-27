import { useState } from "react";
import { courses, students } from "../data";

const LIMITS = {
  cla: 10,
  mt: 50,
  mp: 10,
  q: 20,
  et: 100,
};

function EnterMarks() {
  const [courseIdx, setCourseIdx] = useState(0);
  const [marks, setMarks] = useState({}); // { "CSF301-CSE-A-220102801-cla": "8" }
  const [saved, setSaved] = useState(false);

  const course = courses[courseIdx];
  // Include the assessment field name so each input has its own unique key
  const key = (roll, field) => `${course.code}-${course.section}-${roll}-${field}`;
  const list = students.filter((s) => s.section === course.section);

  const setMark = (roll, field, value) => {
    setSaved(false);
    const maxLimit = LIMITS[field];

    if (value === "" || (Number(value) >= 0 && Number(value) <= maxLimit)) {
      setMarks((m) => ({ ...m, [key(roll, field)]: value }));
    }
  };

  return (
    <div>
      <h1 className="text-center text-purple-900 mb-6 font-bold font-serif text-xl">
        ENTER INTERNAL MARKS
      </h1>

      <div className="flex items-center gap-4 mb-4">
        <select
          value={courseIdx}
          onChange={(e) => {
            setCourseIdx(Number(e.target.value));
            setSaved(false);
          }}
          className="border border-gray-300 rounded-lg p-2 bg-white"
        >
          {courses.map((c, i) => (
            <option key={i} value={i}>
              {c.code} - {c.name} ({c.section})
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="px-3 py-2">Roll No</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Continuous Lab Assessment (/{LIMITS.cla})</th>
              <th className="px-3 py-2">Mid Term (/{LIMITS.mt})</th>
              <th className="px-3 py-2">Mini Project (/{LIMITS.mp})</th>
              <th className="px-3 py-2">Quiz (/{LIMITS.q})</th>
              <th className="px-3 py-2">End Term (/{LIMITS.et})</th>
            </tr>
          </thead>
          <tbody>
            {list.map((s) => (
              <tr key={s.roll} className="border-b">
                <td className="px-3 py-2">{s.roll}</td>
                <td className="px-3 py-2">{s.name}</td>

                {/* Map over the 5 fields cleanly so each gets its own key & max limit */}
                {Object.entries(LIMITS).map(([field, max]) => (
                  <td key={field} className="px-3 py-2">
                    <input
                      type="number"
                      min="0"
                      max={max}
                      value={marks[key(s.roll, field)] ?? ""}
                      onChange={(e) => setMark(s.roll, field, e.target.value)}
                      className="border border-gray-300 rounded p-1 w-20"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setSaved(true)}
          className="bg-blue-950 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
        >
          Save Marks
        </button>
        {saved && (
          <span className="text-green-700 text-sm font-semibold">
            Marks saved ✓
          </span>
        )}
      </div>
    </div>
  );
}

export default EnterMarks;
