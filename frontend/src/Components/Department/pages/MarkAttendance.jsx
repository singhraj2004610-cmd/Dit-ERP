import { useState } from "react";
import { courses, students } from "../data";

function MarkAttendance() {
  const [courseIdx, setCourseIdx] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [present, setPresent] = useState({}); // { roll: true/false }
  const [saved, setSaved] = useState(false);

  const course = courses[courseIdx];
  const list = students.filter((s) => s.section === course.section);

  const isPresent = (roll) => present[roll] ?? true; // default: present
  const toggle = (roll) => {
    setSaved(false);
    setPresent((p) => ({ ...p, [roll]: !isPresent(roll) }));
  };
  const markAll = (value) => {
    setSaved(false);
    setPresent(Object.fromEntries(list.map((s) => [s.roll, value])));
  };
  const presentCount = list.filter((s) => isPresent(s.roll)).length;

  return (
    <div>
      <h1 className="text-center text-purple-900 mb-6 font-bold font-serif text-xl">MARK ATTENDANCE</h1>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <select
          value={courseIdx}
          onChange={(e) => { setCourseIdx(Number(e.target.value)); setSaved(false); }}
          className="border border-gray-300 rounded-lg p-2 bg-white"
        >
          {courses.map((c, i) => (
            <option key={i} value={i}>{c.code} - {c.name} ({c.section})</option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); setSaved(false); }}
          className="border border-gray-300 rounded-lg p-2 bg-white"
        />
        <button onClick={() => markAll(true)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm">All Present</button>
        <button onClick={() => markAll(false)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm">All Absent</button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="px-3 py-2">Roll No</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((s) => (
              <tr key={s.roll} className="border-b">
                <td className="px-3 py-2">{s.roll}</td>
                <td className="px-3 py-2">{s.name}</td>
                <td className="px-3 py-2 text-center">
                  <button
                    onClick={() => toggle(s.roll)}
                    className={`px-4 py-1 rounded text-white text-xs font-bold ${isPresent(s.roll) ? "bg-green-600" : "bg-red-600"}`}
                  >
                    {isPresent(s.roll) ? "Present" : "Absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <p className="text-sm">Present: {presentCount} / {list.length}</p>
        <button onClick={() => setSaved(true)} className="bg-blue-950 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">
          Save Attendance
        </button>
        {saved && <span className="text-green-700 text-sm font-semibold">Saved for {date} ✓</span>}
      </div>
    </div>
  );
}
export default MarkAttendance;
