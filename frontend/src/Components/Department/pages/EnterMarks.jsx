import { useState } from "react";
import { courses, students } from "../data";

const MAX = 30;

function EnterMarks() {
  const [courseIdx, setCourseIdx] = useState(0);
  const [marks, setMarks] = useState({}); // { "CSF301-CSE-A-220102801": "25" }
  const [saved, setSaved] = useState(false);

  const course = courses[courseIdx];
  const key = (roll) => `${course.code}-${course.section}-${roll}`;
  const list = students.filter((s) => s.section === course.section);

  const setMark = (roll, value) => {
    setSaved(false);
    if (value === "" || (Number(value) >= 0 && Number(value) <= MAX)) {
      setMarks((m) => ({ ...m, [key(roll)]: value }));
    }
  };

  return (
    <div>
      <h1 className="text-center text-purple-900 mb-6 font-bold font-serif text-xl">ENTER INTERNAL MARKS</h1>

      <div className="flex items-center gap-4 mb-4">
        <select
          value={courseIdx}
          onChange={(e) => { setCourseIdx(Number(e.target.value)); setSaved(false); }}
          className="border border-gray-300 rounded-lg p-2 bg-white"
        >
          {courses.map((c, i) => (
            <option key={i} value={i}>{c.code} - {c.name} ({c.section})</option>
          ))}
        </select>
        <span className="text-sm text-gray-600">Max marks: {MAX}</span>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="px-3 py-2">Roll No</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Marks (/{MAX})</th>
            </tr>
          </thead>
          <tbody>
            {list.map((s) => (
              <tr key={s.roll} className="border-b">
                <td className="px-3 py-2">{s.roll}</td>
                <td className="px-3 py-2">{s.name}</td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    min="0"
                    max={MAX}
                    value={marks[key(s.roll)] ?? ""}
                    onChange={(e) => setMark(s.roll, e.target.value)}
                    className="border border-gray-300 rounded p-1 w-20"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button onClick={() => setSaved(true)} className="bg-blue-950 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">
          Save Marks
        </button>
        {saved && <span className="text-green-700 text-sm font-semibold">Marks saved ✓</span>}
      </div>
    </div>
  );
}
export default EnterMarks;
